"use client";
import React from "react";
import ProfileCard from "./ProfileCard";
import { FaUserGraduate, FaUserFriends, FaChalkboardTeacher, FaSchool, FaBuilding, FaBriefcase } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import FloatingShapes from "@/components/FloatingShapes";

const profiles = [
  { title: "Student", icon: <FaUserGraduate size={40} />, path: "/profiles/student" },
  { title: "Parent", icon: <FaUserFriends size={40} />, path: "/profiles/parent" },
  { title: "Mentor", icon: <FaChalkboardTeacher size={40} />, path: "/profiles/mentor" },
  { title: "School", icon: <FaSchool size={40} />, path: "/profiles/school" },
  { title: "College", icon: <FaBuilding size={40} />, path: "/profiles/college" },
  { title: "Company", icon: <FaBriefcase size={40} />, path: "/profiles/company" },
];

const profileDescriptions: Record<string, string> = {
  student: "Students join assessments, choose domains, complete 7-day roadmaps, track progress, get SWOT analysis, and subscribe for extended learning.",
  parent: "Parents can track their child's learning progress, view reports, and monitor roadmap completion while engaging with counsellors for guidance.",
  mentor: "Mentors guide students with personalized mentorship, track performance, and provide feedback on skill-building and learning progress.",
  school: "Institutes can access dashboards for analytics, student performance, report generation, and overall academic progress monitoring.",
  college: "Colleges manage student programs, monitor career readiness, and connect students with internship and placement opportunities.",
  company: "Companies can post jobs/internships, view student analytics, and connect with suitable candidates for recruitment.",
};

const ProfilesSection: React.FC = () => {
  const router = useRouter();

  return (
    <section className="relative py-32 overflow-hidden bg-black/90">
      <div className="absolute inset-0 -z-10">
        <FloatingShapes />
      </div>

      <div className="relative max-w-5xl mx-auto flex flex-col gap-16 px-6 z-10">
        {profiles.map((profile, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center justify-between w-full gap-8 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              <ProfileCard
                title={profile.title}
                icon={profile.icon}
                onClick={() => router.push(profile.path)}
              />
              <motion.div
                initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className={`text-gray-300 md:w-1/2 whitespace-pre-line text-center ${
                  isEven ? "md:text-left" : "md:text-right"
                } text-lg`}
              >
                {profileDescriptions[profile.title.toLowerCase()]}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProfilesSection;
