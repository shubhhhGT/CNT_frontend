import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-richblack-900 text-richblack-25 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-yellow-100 mb-6">
        Refund and Return Policy
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-richblack-5">
          Refund Policy
        </h2>
        <p className="text-richblack-200 mb-4">
          CNT Academy courses are <strong>non-refundable</strong>, but refunds
          may be granted under special circumstances if requested within{" "}
          <strong>7 working days</strong> of purchase. These include:
        </p>
        <ul className="list-disc list-inside text-richblack-200 space-y-2">
          <li>Course access not provided.</li>
          <li>
            Duplicate payment made (refund via the original payment method).
          </li>
          <li>Video quality issues making the course non-functional.</li>
          <li>Cancellation of events.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-richblack-5">
          CNT Academy may deny refund requests in the following cases:
        </h2>
        <ul className="list-disc list-inside text-richblack-200 space-y-2">
          <li>
            A significant portion of the course has been consumed or downloaded
            before the refund request.
          </li>
          <li>Multiple refund requests for the same course.</li>
          <li>
            The course was purchased through a third-party vendor (refund must
            be requested from them).
          </li>
          <li>
            The course is affiliated with a certification partner or institution
            (refund subject to their approval).
          </li>
          <li>Suspicion of bad faith or service abuse.</li>
          <li>
            The user missed a live course or webinar after access was provided.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2 text-richblack-5">
          Refund Processing Period
        </h2>
        <p className="text-richblack-200">
          Any refund claim will usually be processed after a period of{" "}
          <strong>around 10 working days</strong> once the refund request has
          been approved by CNT Academy.
        </p>
      </section>
    </div>
  );
};

export default RefundPolicy;
