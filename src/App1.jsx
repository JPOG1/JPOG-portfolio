import { motion } from "framer-motion";

import React, { Component } from "react";

export class hero extends Component {
  render() {
    return (
      <>
        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center bg-indigo-900 text-white">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold mb-4"
          >
            Hi, I’m John Doe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="text-lg max-w-xl text-center"
          >
            A passionate full-stack developer who loves creating modern web
            apps.
          </motion.p>
        </section>
      </>
    );
  }
}

export default function Portfolio() {
  return (
    <div className="w-full">
      {/* About Section (two-side scroll) */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-slate-900 sm:justify-center sm:items-center">
        {/* Left Side */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl font-bold mb-4 text-sky-400">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            I’m a software developer with experience in building interactive,
            user-friendly applications. I enjoy blending design with code to
            bring ideas to life.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center mt-10 md:mt-0 sm:hidden"
        >
          <img
            src="/profile.png"
            alt="profile"
            className="rounded-2xl shadow-lg shadow-sky-500/20 max-w-sm border border-sky-400/30 sm:hidden"
          />
        </motion.div>
      </section>
    </div>
  );
}
