import React, { useEffect, useState } from "react";
import { getAllCertificates } from "../../../services/operations/courseDetailsAPI";
import { useSelector } from "react-redux";

const AllCertificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  const { token } = useSelector((state) => state.auth);

  const fetchCertificates = async () => {
    try {
      setLoading(true);
      const res = await getAllCertificates(token);
      if (res) {
        setCertificates(res);
      }
    } catch (error) {
      console.error("Error fetching certificates", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCertificates();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-richblack-5 mb-6">
        All Certificates
      </h2>

      {loading ? (
        <p className="text-richblack-200">Loading Certificates...</p>
      ) : certificates.length === 0 ? (
        <p className="text-richblack-200">No certificates found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-richblack-800 text-richblack-5 text-sm rounded-lg overflow-hidden">
            <thead className="bg-richblack-700 text-left">
              <tr>
                <th className="px-4 py-3">Course</th>
                <th className="px-4 py-3">Issued On</th>
                <th className="px-4 py-3">Download</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((cert) => (
                <tr key={cert._id} className="border-b border-richblack-600">
                  <td className="px-4 py-3">
                    {cert?.course?.courseName || "N/A"}
                  </td>
                  <td className="px-4 py-3">
                    {new Date(cert.issuedAt).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-100 hover:underline"
                    >
                      View Certificate
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllCertificates;
