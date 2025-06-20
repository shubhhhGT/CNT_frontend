import React, { useEffect, useState } from "react";
import { getAllSubscribers } from "../../../../services/operations/newsletterApis";
import { formattedDate } from "../../../../utils/dateFormatter";
import { useSelector } from "react-redux";

const NewsletterSubscribers = () => {
  const { token } = useSelector((state) => state.auth);
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchSubscribers = async () => {
      const res = await getAllSubscribers(token);
      if (res) setSubscribers(res);
    };
    fetchSubscribers();
  }, [token]);

  return (
    <div className="p-6 max-w-6xl mx-auto text-richblack-5">
      <h1 className="text-3xl font-bold mb-6">Newsletter Subscribers</h1>

      {subscribers.length === 0 ? (
        <p>No subscribers yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-richblack-800 rounded">
            <thead>
              <tr className="text-left text-sm text-yellow-100">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Signup Date</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((s) => (
                <tr
                  key={s._id}
                  className="border-t border-richblack-600 text-sm"
                >
                  <td className="px-4 py-2">{s.name}</td>
                  <td className="px-4 py-2">{s.email}</td>
                  <td className="px-4 py-2">{formattedDate(s.signupDate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default NewsletterSubscribers;
