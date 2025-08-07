import React from "react";

const DeleteYourAccount = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-richblack-900 text-richblack-25 max-w-4xl mx-auto">
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-yellow-100 mb-6">
          Accessing and Deleting Your Personal Information
        </h2>
        <h3 className="text-xl font-semibold mb-2 text-richblack-5">
          Access to your personal information
        </h3>
        <p className="text-richblack-200 mb-4">
          Registered users can view the categories of personal information
          collected in the Profile section. Some sensitive data, like account
          passwords, may be withheld for security reasons.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-richblack-5">
          Right to request deletion of your personal information
        </h3>
        <ul className="list-disc list-inside text-richblack-200 space-y-2 mb-4">
          <li>
            Users can request the deletion of their personal information through
            the user settings section, the "Delete my account" link, or by
            emailing{" "}
            <a
              href="mailto:support@elearnmarkets.com"
              className="text-yellow-100"
            >
              support@elearnmarkets.com
            </a>
            . However, some data may be retained as required by law or for
            security, fraud prevention, compliance, or service-related purposes.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2 text-richblack-5">
          Our Use of Your Information:
        </h3>
        <p className="text-richblack-200 mb-4">
          The information provided by You shall be used to User data is used for
          necessary communication, targeted marketing, surveys, and data
          analysis. It also helps improve services, develop new features, and
          analyse purchase and usage trends.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-richblack-5">
          Information Collection and Use
        </h3>
        <p className="text-richblack-200 mb-4">
          We collect various types of information to enhance and improve our
          services.
        </p>

        <h4 className="text-lg font-semibold mb-2 text-richblack-5">
          Types of Data Collected
        </h4>
        <p className="text-richblack-200 mb-2 font-semibold">Personal Data:</p>
        <p className="text-richblack-200 mb-4">
          While using our services, users may be required to provide personally
          identifiable information, including but not limited to:
        </p>
        <ul className="list-disc list-inside text-richblack-200 space-y-2 mb-4">
          <li>Email address</li>
          <li>First and last name</li>
          <li>Phone number</li>
          <li>Address (State, Province, ZIP/Postal Code, City)</li>
          <li>Cookies and usage data</li>
        </ul>

        <p className="text-richblack-200 mb-2 font-semibold">Usage Data:</p>
        <p className="text-richblack-200 mb-4">
          We collect data sent by your browser or mobile device when accessing
          our services. This may include:
        </p>
        <ul className="list-disc list-inside text-richblack-200 space-y-2 mb-4">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Pages visited, visit time, and duration</li>
          <li>Unique device identifiers and diagnostic data</li>
          <li>
            Mobile device details (model, operating system, browser type, and
            unique ID)
          </li>
        </ul>
        <p className="text-richblack-200 mb-4">
          This data helps analyse and enhance user experience and service
          performance.
        </p>

        <h4 className="text-lg font-semibold mb-2 text-richblack-5">
          Tracking & Cookies Data
        </h4>
        <p className="text-richblack-200 mb-4">
          We utilize cookies and similar tracking technologies, such as beacons,
          tags, and scripts, to monitor user activity and enhance our services.
          Cookies are small data files, often including an anonymous unique
          identifier, that are stored on a user’s device.
        </p>
        <p className="text-richblack-200 mb-4">
          Users can configure their browser settings to reject cookies; however,
          this may limit access to certain features of our services.
        </p>

        <h4 className="text-lg font-semibold mb-2 text-richblack-5">
          Types of Cookies Used:
        </h4>
        <ul className="list-disc list-inside text-richblack-200 space-y-2 mb-4">
          <li>Session Cookies: Essential for service operation.</li>
          <li>Preference Cookies: Store user preferences and settings.</li>
          <li>Security Cookies: Enhance security measures.</li>
        </ul>

        <h4 className="text-lg font-semibold mb-2 text-richblack-5">
          Use of Data
        </h4>
        <p className="text-richblack-200 mb-2">
          CNT Trading Academy uses the collected data for various purposes:
        </p>
        <ul className="list-disc list-inside text-richblack-200 space-y-2">
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>
            To allow you to participate in interactive features of our Service
            when you choose to do so
          </li>
          <li>To provide customer care and support</li>
          <li>
            To provide analysis or valuable information so that we can improve
            the Service
          </li>
          <li>To monitor the usage of the Service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>
      </section>
    </div>
  );
};
export default DeleteYourAccount;
