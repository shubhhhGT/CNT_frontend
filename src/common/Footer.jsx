import React from "react";
import { FooterLink2 } from "../data/footer-links";
import { Link } from "react-router-dom";

// Images
import Logo from "../assets/Logo/CNT-logo.png";

// Icons
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const BottomFooter = [
  "Privacy Policy",
  "Terms and Conditions",
  "Refund Policy",
  "Grievance Policy",
];

const Plans = ["Paid Memberships", "For Students", "Business Solutions"];
const Community = ["Forums", "Webinars", "Events"];
const Company = [
  "About",
  "Careers",
  "Affiliates",
  "QnA Sessions",
  "Testimonials",
];

const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="flex lg:flex-row flex-col w-11/12 gap-8 items-center justify-between max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-10">
        <div className="border-b w-full flex flex-col lg:flex-row pb-5 border-richblack-700">
          {/* Section 1 */}
          <div className="lg:w-[50%] flex flex-row flex-wrap justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
            <div className="lg:w-[30%] flex flex-col gap-3 mb-7 lg:pl-0 ">
              <img
                src={Logo}
                alt="Logo"
                width={150}
                className="object-contain"
              />

              <p className="text-[14px]">
                Agnostic Edufin Private Limited 212,Girish Ghosh Road, Room No-
                430, 4th Floor, P.S. Belur, Howrah
              </p>

              <div className="flex gap-3 text-lg ">
                <a
                  href="https://www.facebook.com/profile.php?id=61565847206124"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="hover:cursor-pointer hover:text-richblack-50" />
                </a>
                <a
                  href="https://www.instagram.com/cntacademy01/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="hover:cursor-pointer hover:text-richblack-50" />
                </a>
                <a
                  href="https://www.youtube.com/@cntacademy01"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="hover:cursor-pointer hover:text-richblack-50" />
                </a>
                <a
                  href="https://x.com/cntacademy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="hover:cursor-pointer hover:text-richblack-50" />
                </a>
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h2 className="text-base text-richblack-50 font-semibold">
                Company
              </h2>

              <div className="flex flex-col gap-2 mt-2">
                {Company.map((element, index) => {
                  return (
                    <div
                      key={index}
                      className="text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link
                        to={`/${element.split(" ").join("-").toLowerCase()}`}
                      >
                        {element}
                      </Link>
                    </div>
                  );
                })}
              </div>

              <h2 className="text-base text-richblack-50 font-semibold mt-7">
                Support
              </h2>

              <div className="text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                <Link to={"/help-center"}>Help Center</Link>
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h2 className="text-base text-richblack-50 font-semibold">
                Plans
              </h2>

              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((element, index) => {
                  return (
                    <div
                      key={index}
                      className="text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={"/plans"}>{element}</Link>
                    </div>
                  );
                })}
              </div>

              <h2 className="text-base text-richblack-50 font-semibold mt-7">
                Community
              </h2>

              <div className="flex flex-col gap-2 mt-2">
                {Community.map((element, index) => {
                  return (
                    <div
                      key={index}
                      className="text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link
                        to={`/${element.split(" ").join("-").toLowerCase()}`}
                      >
                        {element}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            {FooterLink2.map((element, index) => {
              return (
                <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0" key={index}>
                  <h2 className="text-richblack-50 font-semibold text-[16px]">
                    {element.title}
                  </h2>

                  <div className="flex flex-col gap-2 mt-2">
                    {element.links.map((link, i) => {
                      return (
                        <div
                          className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                          key={i}
                        >
                          <Link to={link.link}>{link.title}</Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-10 text-sm">
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            {BottomFooter.map((ele, i) => {
              return (
                <div
                  className={`${
                    BottomFooter.length - 1 === i
                      ? ""
                      : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  } px-3`}
                  key={i}
                >
                  <Link
                    to={`/${ele.split(" ").join("-").toLowerCase()}`}
                    className="hover:text-richblack-50"
                  >
                    {ele}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            Made with <span style={{ color: "red" }}>&#10084;&#65039;</span>{" "}
            ShubhamGoswami © 2025 CntAcademy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
