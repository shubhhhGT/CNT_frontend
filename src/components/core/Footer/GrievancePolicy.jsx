import React from "react";

const GrievancePolicy = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-richblack-900 text-richblack-25 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-yellow-100 mb-6">
        Grievance Officer and Policy Summary
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-richblack-5">
          1. Introduction
        </h2>
        <p className="text-richblack-200">
          Agnostic Edufin Private Limited ("Company") values user satisfaction
          and has established a Grievance Redressal Mechanism to ensure timely
          resolution of user complaints related to its services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-richblack-5">
          2. Complaint Registration Process
        </h2>
        <ul className="list-disc list-inside text-richblack-200 space-y-2">
          <li>
            Users can report complaints via email to{" "}
            <a className="text-yellow-100" href="mailto:info@cntacademy.com">
              info@cntacademy.com
            </a>
            from their registered email ID, mentioning their full name,
            registered mobile number, and details of the issue.
          </li>
          <li>Anonymous complaints will not be entertained.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-richblack-5">
          3. Escalation to Grievance Officer
        </h2>
        <ul className="list-disc list-inside text-richblack-200 space-y-2">
          <li>
            If a complaint remains unresolved for two weeks, users can escalate
            it to the Grievance Officer, <strong>Vikash Bagaria</strong>, at{" "}
            <a className="text-yellow-100" href="mailto:admin@cntacademy.com">
              admin@cntacademy.com
            </a>{" "}
            or via postal mail to the Company’s registered office in Kolkata.
          </li>
          <li>Users must provide their complaint details for reference.</li>
          <li>
            The Grievance Officer will resolve the issue within 30 days of
            receiving the grievance.
          </li>
          <li>
            If no further response is received from the user within 10 days of
            the resolution, the complaint will be considered closed.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-richblack-5">
          4. Compliance Reporting
        </h2>
        <p className="text-richblack-200">
          A quarterly summary of pending and resolved grievances is submitted to
          the Board of Directors for compliance and review.
        </p>
      </section>
    </div>
  );
};

export default GrievancePolicy;
