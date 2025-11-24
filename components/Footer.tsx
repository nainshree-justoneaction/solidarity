"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => (
  <footer className="py-16 px-6 bg-black text-gray-400 border-t border-white/10 flex flex-col gap-12">
    {/* Quick Links */}
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col md:flex-row gap-6">
        <a href="#" className="hover:text-emerald-400 transition">About</a>
        <a href="#" className="hover:text-emerald-400 transition">Blog</a>
        <a href="#" className="hover:text-emerald-400 transition">Contact</a>
        <a href="#" className="hover:text-emerald-400 transition">Terms</a>
        <a href="#" className="hover:text-emerald-400 transition">Privacy</a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4">
        {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
          <motion.a
            key={idx}
            whileHover={{ scale: 1.2, color: "#10B981" }}
            transition={{ type: "spring", stiffness: 300 }}
            href="#"
            className="text-gray-400"
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </div>
    </div>

    {/* Copyright */}
    <p className="text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Solidarity. All rights reserved.
    </p>
  </footer>
);

export default Footer;
