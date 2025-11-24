"use client";
import { motion } from "framer-motion";
import FloatingShapes from "./FloatingShapes";
import { FaClipboardCheck, FaCalendarAlt, FaChartLine, FaUserTie, FaCertificate } from "react-icons/fa";

const features = [
  { icon: <FaClipboardCheck size={24} />, text: "Access to personalized assessments & reports" },
  { icon: <FaCalendarAlt size={24} />, text: "7-day structured learning roadmap" },
  { icon: <FaChartLine size={24} />, text: "Skill tracking & progress reports" },
  { icon: <FaUserTie size={24} />, text: "1:1 mentorship & guidance" },
  { icon: <FaCertificate size={24} />, text: "Certificates & analytics dashboards" },
];

const PlanSection: React.FC = () => {
  return (
    <section className="py-32 bg-black px-6 relative overflow-hidden">
      <FloatingShapes />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          Complete Career Growth Plan — ₹365/year
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg mb-10"
        >
          Unlock a complete suite of learning, assessments, mentorship, and career analytics designed to guide students step-by-step toward their goals.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex items-center gap-4 bg-gray-900/30 p-4 rounded-xl border border-gray-700 hover:border-gray-500 hover:shadow-gray-500/20 transition-all"
            >
              <div className="text-gray-400">{feature.icon}</div>
              <p className="text-gray-300 text-left">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 rounded-xl bg-gray-700 hover:bg-gray-600 text-white font-bold shadow-xl transition"
        >
          Subscribe Now
        </motion.button>
        <p className="text-gray-500 mt-2 text-sm">Only ₹365/year for full access.</p>
      </div>
    </section>
  );
};

export default PlanSection;
