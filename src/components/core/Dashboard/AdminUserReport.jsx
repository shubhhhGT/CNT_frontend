import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const AdminUserReport = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);

  const handleDownload = async () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/report/download-user-report`,
        {
          params: { startDate, endDate },
          responseType: "blob",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `user_report_${startDate}_to_${endDate}.xlsx`
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download user report");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 text-richblack-5">
      <h2 className="text-3xl font-semibold mb-6">Download User Report</h2>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div>
          <label className="block mb-2 text-richblack-200">Start Date</label>
          <input
            type="date"
            className="px-4 py-2 bg-richblack-700 border border-richblack-600 rounded-lg text-richblack-5"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-richblack-200">End Date</label>
          <input
            type="date"
            className="px-4 py-2 bg-richblack-700 border border-richblack-600 rounded-lg text-richblack-5"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <button
        onClick={handleDownload}
        disabled={loading}
        className="px-6 py-3 bg-yellow-100 text-richblack-900 font-semibold rounded-lg hover:bg-yellow-200 disabled:opacity-50"
      >
        {loading ? "Generating Report..." : "Download Excel"}
      </button>
    </div>
  );
};

export default AdminUserReport;
