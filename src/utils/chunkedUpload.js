import { apiConnector } from "../services/apiconnector";
import { uploadEndpoints } from "../services/apis";

const { INITIATE_UPLOAD, GENERATE_SIGNED_URL, COMPLETE_UPLOAD } =
  uploadEndpoints;

const CHUNK_SIZE = 10 * 1024 * 1024; // 10MB

export const uploadVideoInChunks = async (file, token) => {
  try {
    // 1. Initiate multipart upload
    const initiateResponse = await apiConnector(
      "POST",
      INITIATE_UPLOAD,
      {
        fileName: file.name,
        contentType: file.type,
      },
      { Authorization: `Bearer ${token}` }
    );

    const { uploadId, fileKey } = initiateResponse.data;

    // 2. Calculate chunks and get presigned URLs
    const chunkCount = Math.ceil(file.size / CHUNK_SIZE);
    const urlsResponse = await apiConnector(
      "POST",
      GENERATE_SIGNED_URL,
      {
        fileKey,
        uploadId,
        partsCount: chunkCount,
      },
      { Authorization: `Bearer ${token}` }
    );

    const presignedUrls = urlsResponse.data.presignedUrls;

    // 3. Upload all chunks
    const uploadPromises = [];
    const etags = [];

    for (let i = 0; i < chunkCount; i++) {
      const start = i * CHUNK_SIZE;
      const end = Math.min(start + CHUNK_SIZE, file.size);
      const chunk = file.slice(start, end);

      const uploadPromise = fetch(presignedUrls[i], {
        method: "PUT",
        body: chunk,
        headers: { "Content-Type": file.type },
      });

      uploadPromises.push(
        uploadPromise.then(async (response) => {
          if (!response.ok) throw new Error("Chunk upload failed");
          const etag = response.headers.get("ETag");
          etags[i] = {
            PartNumber: i + 1,
            ETag: etag,
          };
        })
      );
    }

    await Promise.all(uploadPromises);

    // 4. Complete the upload
    const completeResponse = await apiConnector(
      "POST",
      COMPLETE_UPLOAD,
      {
        fileKey,
        uploadId,
        parts: etags,
      },
      { Authorization: `Bearer ${token}` }
    );

    return completeResponse.data.videoUrl;
  } catch (error) {
    console.error("Chunked upload error:", error);
    throw error;
  }
};
