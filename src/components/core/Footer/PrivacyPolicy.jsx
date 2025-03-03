import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-4 text-richblack-200">
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-richblack-5">
          Privacy Policy
        </h1>
        <p className="mb-2 text-richblack-25">Last Updated: 01/03/2025</p>
        <p className="mb-6">
          Welcome to CNT Academy! This Privacy Policy outlines how we collect,
          use, and disclose your information when you use our website{" "}
          <a href="https://cntacademy.com" className="text-blue-600 underline">
            https://cntacademy.com
          </a>{" "}
          and our services.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-richblack-5">
          1. Information We Collect:
        </h2>
        <p className="mb-2">
          • <strong>Personal Information:</strong> We collect information such
          as name, email address, and other relevant details.
        </p>
        <p className="mb-6">
          • <strong>Non-personal Information:</strong> We gather data like
          browser type, IP address, and other analytics.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-richblack-5">
          2. How We Use Your Information:
        </h2>
        <p className="mb-6">
          We use the collected information to provide and improve our services,
          send newsletters, and enhance user experience.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-richblack-5">
          3. Cookies and Tracking Technologies:
        </h2>
        <p className="mb-6">
          We may use cookies and tracking technologies to personalize your
          experience. You can manage cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-richblack-5">
          4. Third-Party Services:
        </h2>
        <p className="mb-6">
          Certain services may be provided by third parties, and their privacy
          policies are linked for your review.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-richblack-5">
          5. Security:
        </h2>
        <p className="mb-6">
          We implement robust measures to ensure the security of your
          information.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-richblack-5">
          6. Your Choices:
        </h2>
        <p className="mb-6">
          You have the option to access, update, or delete your information
          through your account settings.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-richblack-5">
          7. Changes to this Privacy Policy:
        </h2>
        <p className="mb-6">
          This policy may be updated, and the last update date is provided
          above.
        </p>

        <p className="mb-6">
          If you have any questions or concerns about our Privacy Policy, please
          contact us at{" "}
          <a
            href="mailto:chartandtradeacademy@gmail.com"
            className="text-blue-600 underline"
          >
            chartandtradeacademy@gmail.com
          </a>
        </p>

        <p className="font-semibold">Thank you for choosing CNT Academy!</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
