import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";


export default function Portfolio() {
  const projects = [
    {
      title: "HumblexMC",
      description:
        "Global Game Service served approximately 50k-100k+ players for 7-8 years. Experience in large-scale game server management, development, community engagement and business.",
      link: "https://humblex.net",
    },
    {
      title: "ML Projects Coming Soon",
      description:
        "Refer to my Github/Resume for old Software Projects | Temporarily not available and replaced with resume.",
      link: "https://axeltwc.github.io/AxelTang-Resume.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-black via-blue-900 to-black">
        <motion.h1
          className="text-5xl font-bold mb-4 text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I'm Axel Tang👋
        </motion.h1>
        <motion.p
          className="text-xl text-gray-200 max-w-xl drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
        Master of Engineering Student | Data Analytics and Machine Learning @ the University of Toronto.
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
          Heavily inspired by top and personal industrial connections, being in the same school as Geoffery Hinton, Ilya Sutskever, and other ML pioneers.
          From a humble background of studying in Canada for 8-10 years, taking care of family financial responsibilies and fast tracking undergraduate program. I am now a current graduate student in UofT.
          I have been a passionate developer since 14 and recently found interest in advancing AI and push boundaries that were unseen before.
          This portfolio showcases my journey in machine learning, data analytics, and software development.
        </p>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-16 bg-gradient-to-b from-black via-blue-950 to-black">
        <h2 className="text-3xl font-semibold mb-8 text-center text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <Card className="rounded-2xl shadow-lg bg-blue-950 border border-blue-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">{p.title}</h3>
                  <p className="text-gray-300 mb-4">{p.description}</p>
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-blue-700 hover:bg-blue-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.8)]">View Project</Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {["Python", "TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "React", "CI/CD", "Git"]
            .map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-900 rounded-full text-sm font-medium text-white border border-blue-700 shadow-[0_0_10px_rgba(59,130,246,0.6)]"
              >
                {skill}
              </span>
            ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 text-center bg-gradient-to-t from-black via-blue-950 to-black">
        <h2 className="text-3xl font-semibold mb-4 text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]">Get in Touch</h2>
        <p className="text-gray-200 mb-6">
          Looking forward for internships starting from Winter 2026.
        </p>
        <a href="mailto:youremail@gmail.com">
          <Button size="lg" className="bg-blue-700 hover:bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.9)]">Contact Me</Button>
        </a>
      </section>
    </div>
  );
}
