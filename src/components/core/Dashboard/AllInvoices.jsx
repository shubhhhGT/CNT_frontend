import React, { useEffect, useState } from "react";
import { getAllInvoices } from "../../../services/operations/invoiceApi";
import { useSelector } from "react-redux";

const AllInvoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  const { token } = useSelector((state) => state.auth);

  const fetchInvoices = async () => {
    try {
      setLoading(true);
      const res = await getAllInvoices(token);
      setInvoices(res);
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

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-richblack-5 mb-6">
        All Invoices
      </h2>

      {loading ? (
        <p className="text-richblack-200">Loading invoices...</p>
      ) : invoices.length === 0 ? (
        <p className="text-richblack-200">No invoices found.</p>
      ) : (
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
              {invoices.map((invoice) => (
                <tr key={invoice._id} className="border-b border-richblack-600">
                  <td className="px-4 py-3">{invoice.invoiceNumber}</td>
                  <td className="px-4 py-3">{invoice.invoiceDate}</td>
                  <td className="px-4 py-3">{invoice.customerName}</td>
                  <td className="px-4 py-3">{invoice.courseName.join(", ")}</td>
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
      )}
    </div>
  );
};

export default AllInvoices;
