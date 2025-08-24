import React, { useEffect, useState } from "react";
import { getAllInvoices } from "../../../services/operations/invoiceApi";
import { useSelector } from "react-redux";

const AllInvoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [invoicesPerPage] = useState(10);

  const { token } = useSelector((state) => state.auth);

  const fetchInvoices = async () => {
    try {
      setLoading(true);
      const res = await getAllInvoices(token);
      setInvoices(res);
      setFilteredInvoices(res);
    } catch (error) {
      console.error("Error fetching invoices", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
    // eslint-disable-next-line
  }, []);

  // Handle search
  useEffect(() => {
    const filtered = invoices.filter(
      (invoice) =>
        invoice.invoiceNumber
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        invoice.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        invoice.courseName.some((course) =>
          course.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setFilteredInvoices(filtered);
    setCurrentPage(1); // Reset to first page when search changes
  }, [searchTerm, invoices]);

  // Get current invoices
  const indexOfLastInvoice = currentPage * invoicesPerPage;
  const indexOfFirstInvoice = indexOfLastInvoice - invoicesPerPage;
  const currentInvoices = filteredInvoices.slice(
    indexOfFirstInvoice,
    indexOfLastInvoice
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-richblack-5 mb-6">
        All Invoices
      </h2>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by invoice number, customer, or course..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 bg-richblack-700 text-richblack-5 rounded-lg border border-richblack-600 focus:outline-none focus:ring-2 focus:ring-yellow-100"
        />
      </div>

      {loading ? (
        <p className="text-richblack-200">Loading invoices...</p>
      ) : filteredInvoices.length === 0 ? (
        <p className="text-richblack-200">
          {searchTerm ? "No matching invoices found." : "No invoices found."}
        </p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-richblack-800 text-richblack-5 text-sm rounded-lg overflow-hidden">
              <thead className="bg-richblack-700 text-left">
                <tr>
                  <th className="px-4 py-3">Invoice No.</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Customer</th>
                  <th className="px-4 py-3">Courses</th>
                  <th className="px-4 py-3">Amount (INR)</th>
                  <th className="px-4 py-3">Download</th>
                </tr>
              </thead>
              <tbody>
                {currentInvoices.map((invoice) => (
                  <tr
                    key={invoice._id}
                    className="border-b border-richblack-600"
                  >
                    <td className="px-4 py-3">{invoice.invoiceNumber}</td>
                    <td className="px-4 py-3">{invoice.invoiceDate}</td>
                    <td className="px-4 py-3">{invoice.customerName}</td>
                    <td className="px-4 py-3">
                      {invoice.courseName.join(", ")}
                    </td>
                    <td className="px-4 py-3">{invoice.rate.toFixed(2)}</td>
                    <td className="px-4 py-3">
                      <a
                        href={invoice.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-100 hover:underline"
                      >
                        View PDF
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-richblack-200">
              Showing {indexOfFirstInvoice + 1} to{" "}
              {Math.min(indexOfLastInvoice, filteredInvoices.length)} of{" "}
              {filteredInvoices.length} invoices
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-richblack-700 text-richblack-5 rounded disabled:opacity-50"
              >
                Previous
              </button>
              {Array.from(
                {
                  length: Math.ceil(filteredInvoices.length / invoicesPerPage),
                },
                (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`px-3 py-1 rounded ${
                      currentPage === i + 1
                        ? "bg-yellow-100 text-richblack-900"
                        : "bg-richblack-700 text-richblack-5"
                    }`}
                  >
                    {i + 1}
                  </button>
                )
              )}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage ===
                  Math.ceil(filteredInvoices.length / invoicesPerPage)
                }
                className="px-3 py-1 bg-richblack-700 text-richblack-5 rounded disabled:opacity-50"
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

export default AllInvoices;
