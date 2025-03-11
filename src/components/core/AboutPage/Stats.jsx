import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const stat = [
  { count: "5K", label: "Active Students", duration: 3 },
  { count: "10+", label: "Mentors", duration: 1.5 },
  { count: "200+", label: "Courses", duration: 2 },
  { count: "50+", label: "Awards", duration: 2.5 },
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    rootMargin: "-50px 0px",
  });

  const parseCount = (count) => {
    const value = parseInt(count.replace(/[^0-9]/g, ""));
    const suffix = count.replace(/[0-9]/g, "");
    return { value, suffix };
  };

  return (
    <section className="bg-richblack-700" ref={ref}>
      <div className="flex flex-col w-11/12 gap-10 justify-between max-w-maxContent text-white mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {stat.map((data, index) => {
            const { value, suffix } = parseCount(data.count);

            return (
              <div key={index} className="flex flex-col py-10">
                <h2 className="text-[30px] font-bold text-richblack-5">
                  {inView ? (
                    <CountUp start={0} end={value} duration={data.duration} />
                  ) : (
                    0
                  )}
                  {suffix}
                </h2>
                <p className="font-semibold text-[16px] text-richblack-500">
                  {data.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
