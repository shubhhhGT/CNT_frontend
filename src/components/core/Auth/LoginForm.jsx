import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/operations/authAPI";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { setToken } from "../../../slices/authSlice";
import { setUser } from "../../../slices/profileSlice";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(login(formData.email, formData.password, navigate));
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;

      const res = await axios.post(`${BASE_URL}/auth/login/google/web`, {
        token: credential,
      });

      if (res.data.success) {
        const { token, existingUser } = res.data;

        // Set in Redux
        dispatch(setToken(token));
        dispatch(setUser(existingUser));

        // Set in localStorage
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(existingUser));

        // Redirect
        navigate("/dashboard/my-profile");
      } else {
        console.error("Login failed:", res.data.message);
      }
    } catch (err) {
      console.error("Error logging in with Google:", err);
    }
  };

  const handleGoogleFailure = () => {
    console.error("Google login failed");
  };

  return (
    <>
      <form
        className="mt-6 flex w-full flex-col gap-y-4"
        onSubmit={submitHandler}
      >
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter email address"
            onChange={changeHandler}
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full form-style"
          />
        </label>

        <label className="w-full relative">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            placeholder="Enter Password"
            onChange={changeHandler}
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
          <span
            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <Link to={"/forgot-password"}>
            <p className="mt-1 text-xs ml-auto max-w-max text-blue-200">
              Forgot Password
            </p>
          </Link>
        </label>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Sign In
        </button>
      </form>

      <div className="mt-6 w-full">
        <div className="flex w-full items-center justify-between mb-4">
          <div className="w-[42%] h-[1px] bg-richblack-700"></div>
          <div className="text-center text-richblack-600 text-sm">OR</div>
          <div className="w-[42%] h-[1px] bg-richblack-700"></div>
        </div>
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
        />
      </div>
    </>
  );
};

export default LoginForm;
