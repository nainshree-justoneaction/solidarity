"use client";
import React from "react";
import ProfileCard from "@/components/ProfileSection/ProfileCard";
import { FaUserGraduate, FaUserFriends, FaChalkboardTeacher, FaSchool, FaBuilding, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import FloatingShapes from "./FloatingShapes";

interface Profile {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const profiles: Profile[] = [
  { title: "Student", icon: <FaUserGraduate size={40} />, description: "- Assessments\n- Personalized roadmap\n- Skill tracking" },
  { title: "Parent", icon: <FaUserFriends size={40} />, description: "- Monitor child's progress\n- Track learning\n- Receive reports" },
  { title: "Mentor", icon: <FaChalkboardTeacher size={40} />, description: "- Guide students\n- Personalized mentorship\n- Analytics" },
  { title: "School", icon: <FaSchool size={40} />, description: "- Analytics for institution\n- Reports\n- Student programs" },
  { title: "College", icon: <FaBuilding size={40} />, description: "- Manage student programs\n- Career guidance\n- Track progress" },
  { title: "Company", icon: <FaBriefcase size={40} />, description: "- Find talent\n- Internship opportunities\n- Skill verification" },
];

const ProfilesSection: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-black/90">
      <FloatingShapes />
      <div className="max-w-5xl mx-auto flex flex-col gap-16 px-6">
        {profiles.map((profile, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
            {idx % 2 === 0 ? (
              <>
                <ProfileCard title={profile.title} icon={profile.icon} />
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="text-gray-300 md:w-1/2 whitespace-pre-line text-center md:text-left"
                >
                  {profile.description}
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="text-gray-300 md:w-1/2 whitespace-pre-line text-center md:text-right"
                >
                  {profile.description}
                </motion.div>
                <ProfileCard title={profile.title} icon={profile.icon} />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfilesSection;
