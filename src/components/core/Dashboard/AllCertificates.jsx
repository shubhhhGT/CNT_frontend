import React, { useEffect, useState } from "react";
import { getAllCertificates } from "../../../services/operations/courseDetailsAPI";
import { useSelector } from "react-redux";

const AllCertificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [filteredCertificates, setFilteredCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [certificatesPerPage] = useState(10);

  const { token } = useSelector((state) => state.auth);

  const fetchCertificates = async () => {
    try {
      setLoading(true);
      const res = await getAllCertificates(token);
      if (res) {
        setCertificates(res);
        setFilteredCertificates(res);
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

  // Handle search
  useEffect(() => {
    const filtered = certificates.filter(
      (cert) =>
        cert.course?.courseName
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        new Date(cert.issuedAt)
          .toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setFilteredCertificates(filtered);
    setCurrentPage(1); // Reset to first page when search changes
  }, [searchTerm, certificates]);

  // Get current certificates
  const indexOfLastCertificate = currentPage * certificatesPerPage;
  const indexOfFirstCertificate = indexOfLastCertificate - certificatesPerPage;
  const currentCertificates = filteredCertificates.slice(
    indexOfFirstCertificate,
    indexOfLastCertificate
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-richblack-5 mb-6">
        All Certificates
      </h2>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by course name or date..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 bg-richblack-700 text-richblack-5 rounded-lg border border-richblack-600 focus:outline-none focus:ring-2 focus:ring-yellow-100"
        />
      </div>

      {loading ? (
        <p className="text-richblack-200">Loading certificates...</p>
      ) : filteredCertificates.length === 0 ? (
        <p className="text-richblack-200">
          {searchTerm
            ? "No matching certificates found."
            : "No certificates found."}
        </p>
      ) : (
        <>
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
                {currentCertificates.map((cert) => (
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

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
            <p className="text-richblack-200 text-sm sm:text-base">
              Showing {indexOfFirstCertificate + 1} to{" "}
              {Math.min(indexOfLastCertificate, filteredCertificates.length)} of{" "}
              {filteredCertificates.length} certificates
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-richblack-700 text-richblack-5 rounded disabled:opacity-50 hover:bg-richblack-600 transition-colors"
              >
                Previous
              </button>
              {Array.from(
                {
                  length: Math.ceil(
                    filteredCertificates.length / certificatesPerPage
                  ),
                },
                (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`px-3 py-1 rounded ${
                      currentPage === i + 1
                        ? "bg-yellow-100 text-richblack-900 font-medium"
                        : "bg-richblack-700 text-richblack-5 hover:bg-richblack-600"
                    } transition-colors`}
                  >
                    {i + 1}
                  </button>
                )
              ).slice(
                Math.max(0, currentPage - 3),
                Math.min(
                  Math.ceil(filteredCertificates.length / certificatesPerPage),
                  currentPage + 2
                )
              )}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage ===
                  Math.ceil(filteredCertificates.length / certificatesPerPage)
                }
                className="px-3 py-1 bg-richblack-700 text-richblack-5 rounded disabled:opacity-50 hover:bg-richblack-600 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllCertificates;
