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

  const skills = ['Java', 'Python', 'OpenCV', 'GitHub', 'TensorFlow', 'React', 'CI/CD'];

  return (
    <div className="App min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white font-sans">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-blue-900 via-black to-blue-950 px-6">
        <motion.h1
          className="text-6xl font-extrabold mb-4 text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I'm Axel Tang 👋
        </motion.h1>
        <motion.p
          className="text-xl text-gray-200 max-w-2xl mb-6 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          MEng Student @ UofT | Data Analytics & Machine Learning
        </motion.p>
        <div className="flex gap-6 text-white text-2xl">
          <a href="mailto:axeltang@gmail.com" className="hover:text-blue-400 transition"><Mail /></a>
          <a href="https://github.com/yourusername" className="hover:text-blue-400 transition"><Github /></a>
          <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-400 transition"><Linkedin /></a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 max-w-5xl mx-auto bg-gradient-to-r from-black via-blue-900 to-black rounded-3xl shadow-xl my-12">
        <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]">About Me</h2>
        <p className="text-gray-200 leading-relaxed text-lg space-y-4">
          From 8-9 years of studying in Canada, with a background of taking financial responsibility for my family and aligning interests with technology. I have a fast-track record for Bachelor in Computer Science.<br /><br />
          With guidance from top tech industry leaders and being privileged to share the same school with Geoffery Hinton and Ilya Sutskever, I am now pursuing a Master of Engineering in Data Analytics and Machine Learning at the University of Toronto.<br /><br />
          Starting my career at the age of 14, I have learned to adapt to the fast-paced world of technology and developed a strong foundation in software development and business management.<br /><br />
          My experiences with UMPLE serving millions of users have prepared me to elevate my career to the next level. I am excited to contribute to innovative projects that make a real difference.
        </p>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-black via-blue-950 to-black rounded-3xl shadow-xl my-12">
        <h2 className="text-4xl font-bold mb-12 text-center text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-3xl shadow-2xl border border-blue-700 hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]">{p.title}</h3>
              <p className="text-gray-300 mb-5">{p.description}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.8)] font-semibold transition">View Project</button>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-20 max-w-5xl mx-auto bg-gradient-to-r from-black via-blue-900 to-black rounded-3xl shadow-xl my-12">
        <h2 className="text-4xl font-bold mb-8 text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map(skill => (
            <span key={skill} className="px-5 py-2 bg-blue-800 rounded-full text-white font-medium border border-blue-700 shadow-[0_0_12px_rgba(59,130,246,0.6)] text-lg">{skill}</span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 text-center bg-gradient-to-t from-black via-blue-950 to-black rounded-3xl shadow-xl my-12">
        <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]">Get in Touch</h2>
        <p className="text-gray-200 mb-8 text-lg">
          Looking for Winter 2026 Internship opportunities in Machine Learning.
        </p>
        <a href="mailto:axeltang@gmail.com">
          <button className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-3 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.9)] text-xl font-semibold transition-all">Contact Me</button>
        </a>
      </section>

    </div>
  );
}

export default App;
