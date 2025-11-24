"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const roles = ["Student", "Parent", "Mentor", "School", "College", "Company"];

const Navbar: React.FC = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profilesDropdownOpen, setProfilesDropdownOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          onClick={() => router.push("/")}
          className="text-2xl font-bold tracking-wide cursor-pointer text-white"
        >
          Solidarity
        </h1>

        <nav className="hidden md:flex gap-6 items-center relative">
          {links.map((link, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push(link.path)}
              className="text-gray-300 font-medium hover:text-gray-100 transition"
            >
              {link.name}
            </motion.button>
          ))}

          <div
            onMouseEnter={() => setProfilesDropdownOpen(true)}
            onMouseLeave={() => setProfilesDropdownOpen(false)}
            className="relative"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-gray-300 font-medium hover:text-gray-100 transition"
            >
              Profiles
            </motion.button>

            {profilesDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg flex flex-col"
              >
                {roles.map((role, idx) => (
                  <button
                    key={idx}
                    onClick={() => router.push(`/profiles/${role.toLowerCase()}`)}
                    className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-gray-100 transition text-left"
                  >
                    {role}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push("/login")}
            className="text-gray-300 font-medium hover:text-gray-100 transition"
          >
            Login
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push("/signup")}
            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-black font-bold transition"
          >
            Signup
          </motion.button>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 focus:outline-none text-2xl"
          >
            {mobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-900 w-full px-6 py-4 flex flex-col gap-4"
        >
          {links.map((link, idx) => (
            <button
              key={idx}
              onClick={() => {
                router.push(link.path);
                setMobileMenuOpen(false);
              }}
              className="text-gray-300 font-medium hover:text-gray-100 transition text-left"
            >
              {link.name}
            </button>
          ))}

          {/* Mobile Profiles */}
          <div className="flex flex-col gap-2">
            <span className="text-gray-300 font-medium">Profiles</span>
            {roles.map((role, idx) => (
              <button
                key={idx}
                onClick={() => {
                  router.push(`/profiles/${role.toLowerCase()}`);
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-gray-100 transition text-left"
              >
                {role}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              router.push("/login");
              setMobileMenuOpen(false);
            }}
            className="text-gray-300 font-medium hover:text-gray-100 transition text-left"
          >
            Login
          </button>

          <button
            onClick={() => {
              router.push("/signup");
              setMobileMenuOpen(false);
            }}
            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-black font-bold transition text-left"
          >
            Signup
          </button>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
