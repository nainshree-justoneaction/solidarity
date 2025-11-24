"use client";
import React from "react";
import { motion } from "framer-motion";

interface ProfileCardProps {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, icon, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="flex flex-col items-center justify-center bg-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl hover:border-gray-500 hover:shadow-gray-400 cursor-pointer w-full max-w-sm transition"
    >
      <div className="mb-4 text-gray-400">{icon}</div>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
    </motion.div>
  );
};

export default ProfileCard;
