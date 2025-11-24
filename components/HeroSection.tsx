"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import FloatingShapes from "./FloatingShapes";

const HeroSection: React.FC = () => {
  const router = useRouter();
  return (
    <section className="pt-40 pb-32 px-6 relative overflow-hidden bg-black">
      <FloatingShapes />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">
          One Platform for Students, Mentors, Counsellors & Institutes
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-4">
          Solidarity is a unified platform connecting students, mentors, parents, counsellors, institutes, and companies. Get personalized career assessments, guided learning roadmaps, skill-building modules, and mentorship opportunities — all in one place.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/signup")}
          className="mt-8 px-10 py-4 rounded-xl bg-gray-700 hover:bg-gray-600 text-white font-bold shadow-lg transition"
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
