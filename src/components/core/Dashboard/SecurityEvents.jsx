import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllSecurityEvents } from "../../../services/operations/eventApi";

const SecurityEvents = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState("ALL");

  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(10);

  const { token } = useSelector((state) => state.auth);

  const fetchSecurityEvents = async () => {
    try {
      setLoading(true);

      const res = await getAllSecurityEvents(token);

      setEvents(res);
      setFilteredEvents(res);
    } catch (error) {
      console.error("Error fetching security events", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSecurityEvents();
    // eslint-disable-next-line
  }, []);

  // Search + filter
  useEffect(() => {
    let filtered = [...events];

    // Search
    if (searchTerm.trim()) {
      filtered = filtered.filter((event) => {
        return (
          event.type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.ip?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.endpoint?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.userId?.email?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    }

    // Severity filter
    if (severityFilter !== "ALL") {
      filtered = filtered.filter((event) => event.severity === severityFilter);
    }

    setFilteredEvents(filtered);
    setCurrentPage(1);
  }, [searchTerm, severityFilter, events]);

  // Pagination
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Severity badge colors
  const getSeverityClasses = (severity) => {
    switch (severity) {
      case "HIGH":
        return "bg-pink-200 text-pink-900";

      case "MEDIUM":
        return "bg-yellow-100 text-yellow-900";

      default:
        return "bg-richblack-600 text-richblack-5";
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-richblack-5 mb-6">
        Security Events
      </h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by IP, endpoint, type, email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 bg-richblack-700 text-richblack-5 rounded-lg border border-richblack-600 focus:outline-none focus:ring-2 focus:ring-yellow-100"
        />

        {/* Severity Filter */}
        <select
          value={severityFilter}
          onChange={(e) => setSeverityFilter(e.target.value)}
          className="px-4 py-2 bg-richblack-700 text-richblack-5 rounded-lg border border-richblack-600"
        >
          <option value="ALL">All Severities</option>
          <option value="LOW">LOW</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="HIGH">HIGH</option>
        </select>
      </div>

      {loading ? (
        <p className="text-richblack-200">Loading security events...</p>
      ) : filteredEvents.length === 0 ? (
        <p className="text-richblack-200">No security events found.</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-richblack-800 text-richblack-5 text-sm rounded-lg overflow-hidden">
              <thead className="bg-richblack-700 text-left">
                <tr>
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Severity</th>
                  <th className="px-4 py-3">User</th>
                  <th className="px-4 py-3">IP</th>
                  <th className="px-4 py-3">Endpoint</th>
                </tr>
              </thead>

              <tbody>
                {currentEvents.map((event) => (
                  <tr key={event._id} className="border-b border-richblack-600">
                    <td className="px-4 py-3">
                      {new Date(event.createdAt).toLocaleString()}
                    </td>

                    <td className="px-4 py-3">{event.type}</td>

                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${getSeverityClasses(
                          event.severity,
                        )}`}
                      >
                        {event.severity}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      {event.userId
                        ? `${event.userId.firstName} ${event.userId.lastName}`
                        : "Anonymous"}
                    </td>

                    <td className="px-4 py-3">{event.ip}</td>

                    <td className="px-4 py-3 max-w-[250px] truncate">
                      {event.endpoint}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-richblack-200">
              Showing {indexOfFirstEvent + 1} to{" "}
              {Math.min(indexOfLastEvent, filteredEvents.length)} of{" "}
              {filteredEvents.length} events
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
                  length: Math.ceil(filteredEvents.length / eventsPerPage),
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
                ),
              )}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage ===
                  Math.ceil(filteredEvents.length / eventsPerPage)
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

export default SecurityEvents;
