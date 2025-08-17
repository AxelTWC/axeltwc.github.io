import React from 'react';
import './App.css';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  const projects = [
    {
      title: 'Finger Recognition Model',
      description: 'Built a CNN that recognizes how many fingers are held up using TensorFlow & OpenCV.',
      link: 'https://github.com/yourusername/finger-recognition',
    },
    {
      title: 'Housing Price Predictor',
      description: 'Machine learning regression model predicting housing prices with 85% accuracy.',
      link: 'https://github.com/yourusername/housing-prices',
    },
    {
      title: 'NLP Sentiment Analysis',
      description: 'Fine-tuned BERT to classify sentiment in customer reviews with 92% accuracy.',
      link: 'https://github.com/yourusername/sentiment-bert',
    },
  ];

  return (
    <div className="App min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-black via-blue-900 to-black">
        <motion.h1
          className="text-5xl font-bold mb-4 text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I'm Axel 👋
        </motion.h1>
        <motion.p
          className="text-xl text-gray-200 max-w-xl drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Machine Learning Enthusiast | Bridging the gap between modeling and coding
        </motion.p>
        <div className="flex gap-4 mt-6 text-white">
          <a href="mailto:youremail@gmail.com" className="hover:text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]"><Mail /></a>
          <a href="https://github.com/yourusername" className="hover:text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]"><Github /></a>
          <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]"><Linkedin /></a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">About Me</h2>
        <p className="text-gray-200 leading-relaxed">
          I'm passionate about building machine learning models that solve real-world problems. From computer vision to NLP, I enjoy bridging research and practical applications. I’ve contributed to open-source projects, improved CI/CD pipelines, and built solutions that make ML models more accessible to developers.
        </p>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-16 bg-gradient-to-b from-black via-blue-950 to-black">
        <h2 className="text-3xl font-semibold mb-8 text-center text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="rounded-2xl shadow-lg bg-blue-950 border border-blue-700 p-6">
              <h3 className="text-xl font-bold mb-2 text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.description}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded shadow-[0_0_12px_rgba(59,130,246,0.8)]">View Project</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["Python", "TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "React", "CI/CD", "Git"].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-blue-900 rounded-full text-sm font-medium text-white border border-blue-700 shadow-[0_0_10px_rgba(59,130,246,0.6)]">{skill}</span>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 text-center bg-gradient-to-t from-black via-blue-950 to-black">
        <h2 className="text-3xl font-semibold mb-4 text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">Get in Touch</h2>
        <p className="text-gray-200 mb-6">
          I'm open to opportunities in ML engineering, data science, and software development.
        </p>
        <a href="mailto:youremail@gmail.com" className="inline-block px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white rounded shadow-[0_0_15px_rgba(59,130,246,0.9)]">Contact Me</a>
      </section>
    </div>
  );
}

export default App;