import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { getStatsData } from "../../../services/operations/courseDetailsAPI";

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
    rootMargin: "-50px 0px",
  });

  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getStatsData();
        setStats(res);
      } catch (err) {
        console.error("Failed to fetch stats:", err);
      }
    };

    fetchStats();
  }, []);

  const statItems = stats
    ? [
        {
          count: stats.totalStudents,
          label: "Active Students",
          duration: 2.5,
        },
        {
          count: stats.totalCourses,
          label: "Courses",
          duration: 2,
        },
        {
          count: stats.youtubeSubscribers,
          label: "YouTube Subscribers",
          duration: 2,
        },
        {
          count: stats.instagramFollowers,
          label: "Instagram Followers",
          duration: 2,
        },
      ]
    : [];

  return (
    <section className="bg-richblack-700" ref={ref}>
      <div className="flex flex-col w-11/12 gap-10 justify-between max-w-maxContent text-white mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {statItems.map((item, index) => (
            <div key={index} className="flex flex-col py-10">
              <h2 className="text-[30px] font-bold text-richblack-5">
                {inView ? (
                  <CountUp
                    start={0}
                    end={item.count}
                    duration={item.duration}
                  />
                ) : (
                  0
                )}
              </h2>
              <p className="font-semibold text-[16px] text-richblack-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
