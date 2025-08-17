import React from 'react';
import './App.css';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  const projects = [
    {
      title: 'HumblexMC',
      description: 'Served Approximately 50k - 100k upward players globally for 7-8 years.',
      link: 'https://humblex.net',
    },
    {
      title: 'Coming ML Projects',
      description: 'Resume for now.',
      link: 'https://axeltwc.github.io/AxelTang-Resume.pdf',
    },
  ];

  const skills = ['Java', 'Python', 'OpenCV', 'GitHub'];

  return (
    <div className="App min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-blue-900 via-black to-blue-950">
        <motion.h1
          className="text-5xl font-bold mb-4 text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I'm Axel Tang 👋
        </motion.h1>
        <motion.p
          className="text-xl text-gray-200 max-w-xl drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          MEng Student @ UofT | Data Analytics & Machine Learning
        </motion.p>
        <div className="flex gap-4 mt-6 text-white">
          <a href="mailto:axeltang@gmail.com" className="hover:text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]"><Mail /></a>
          <a href="https://github.com/yourusername" className="hover:text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]"><Github /></a>
          <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]"><Linkedin /></a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 max-w-4xl mx-auto bg-gradient-to-t from-black via-blue-900 to-black rounded-xl shadow-lg my-12">
        <h2 className="text-3xl font-semibold mb-4 text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">About Me</h2>
        <p className="text-gray-200 leading-relaxed">
          From 8-9 years of studying in Canada, with a background of taking financial responsibility for my family and aligning interests with technology. I have a fast-track record for Bachelor in Computer Science.
          <br /><br />
          With guidance from top tech industry leaders and being privileged to share the same school with Geoffery Hinton and Ilya Sutskever, I am now pursuing a Master of Engineering in Data Analytics and Machine Learning at the University of Toronto.
          <br /><br />
          Starting my career at the age of 14, I have learned to adapt to the fast-paced world of technology and developed a strong foundation in software development and business management.
          <br /><br />
          My experiences with UMPLE serving millions of users have prepared me to elevate my career to the next level. I am excited to contribute to innovative projects that make a real difference.
        </p>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-16 bg-gradient-to-b from-black via-blue-950 to-black rounded-xl shadow-lg my-12">
        <h2 className="text-3xl font-semibold mb-8 text-center text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-900 p-6 rounded-2xl shadow-lg border border-blue-700"
            >
              <h3 className="text-xl font-bold mb-2 text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.description}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded shadow-[0_0_12px_rgba(59,130,246,0.8)]">
                  View Project
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16 max-w-4xl mx-auto bg-gradient-to-t from-black via-blue-900 to-black rounded-xl shadow-lg my-12">
        <h2 className="text-3xl font-semibold mb-4 text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map(skill => (
            <span key={skill} className="px-4 py-2 bg-blue-800 rounded-full text-sm font-medium text-white border border-blue-700 shadow-[0_0_10px_rgba(59,130,246,0.6)]">{skill}</span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 text-center bg-gradient-to-t from-black via-blue-950 to-black rounded-xl shadow-lg my-12">
        <h2 className="text-3xl font-semibold mb-4 text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">Get in Touch</h2>
        <p className="text-gray-200 mb-6">
          Looking for Winter 2026 Internship opportunities in Machine Learning.
        </p>
        <a href="mailto:axeltang@gmail.com">
          <button className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded shadow-[0_0_15px_rgba(59,130,246,0.9)]">Contact Me</button>
        </a>
      </section>
    </div>
  );
}

export default App;
