import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProfile } from "../../../services/operations/SettingsAPI";
import { useMediaQuery } from "react-responsive";

const DeleteProfile = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMediumScreenOrLarger = useMediaQuery({ minWidth: 640 });

  const [isDeleting, setIsDeleting] = useState(false);
  const [reason, setReason] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleDeleteAccount = async () => {
    try {
      if (!isConfirmed || confirmation.toLowerCase() !== "delete my account") {
        return;
      }

      dispatch(deleteProfile(token, reason, navigate));
    } catch (error) {
      console.log("Error Message- ", error.message);
    }
  };

  return (
    <div
      className={`my-10 flex flex-col sm:flex-row gap-x-5 rounded-md border-[1px] border-pink-700 bg-pink-900 p-8 px-4 sm:px-12 ${
        isMediumScreenOrLarger ? "" : "items-center"
      }`}
    >
      <div
        className={`flex aspect-square h-14 w-14 items-center justify-center rounded-full bg-pink-700 `}
      >
        <FiTrash2 className="text-3xl text-pink-200" />
      </div>

      <div
        className={`flex flex-col space-y-4 w-full ${
          isMediumScreenOrLarger ? "" : "items-center"
        }`}
      >
        <h2 className="text-lg font-semibold text-richblack-5">
          Delete Account
        </h2>

        <div
          className={`text-pink-25 ${
            isMediumScreenOrLarger ? "" : "text-center"
          }`}
        >
          <p>Would you like to delete account?</p>
          <p>
            This account may contain Paid Courses. Deleting your account is
            permanent and will remove all the content associated with it.
          </p>
        </div>

        {!isDeleting ? (
          <button
            type="button"
            className="w-fit text-pink-300 italic cursor-pointer font-medium hover:underline"
            onClick={() => setIsDeleting(true)}
          >
            I want to delete my account.
          </button>
        ) : (
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="reason" className="text-richblack-5">
                Why are you deleting your account? *
              </label>
              <textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Please tell us why you're leaving..."
                className="w-full min-h-[100px] bg-richblack-800 text-richblack-5 rounded-lg p-3 border border-richblack-600 focus:outline-none focus:ring-1 focus:ring-pink-500"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="confirmation" className="text-richblack-5">
                To confirm, type:{" "}
                <span className="italic">"delete my account"</span> *
              </label>
              <input
                type="text"
                id="confirmation"
                value={confirmation}
                onChange={(e) => {
                  setConfirmation(e.target.value);
                  setIsConfirmed(
                    e.target.value.toLowerCase() === "delete my account"
                  );
                }}
                placeholder="Type exactly: delete my account"
                className="w-full bg-richblack-800 text-richblack-5 rounded-lg p-3 border border-richblack-600 focus:outline-none focus:ring-1 focus:ring-pink-500"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                type="button"
                onClick={() => {
                  setIsDeleting(false);
                  setReason("");
                  setConfirmation("");
                }}
                className="py-2 px-4 rounded-lg bg-richblack-700 text-richblack-50 hover:bg-richblack-600 transition-all duration-200"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleDeleteAccount}
                disabled={!isConfirmed || !reason.trim()}
                className={`py-2 px-4 rounded-lg ${
                  isConfirmed && reason.trim()
                    ? "bg-pink-700 text-pink-50 hover:bg-pink-600"
                    : "bg-richblack-600 text-richblack-300 cursor-not-allowed"
                } transition-all duration-200`}
              >
                Confirm Account Deletion
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteProfile;
