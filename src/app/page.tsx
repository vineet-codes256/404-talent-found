"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./components/Card";
import { Button } from "./components/Button";
import { LucideMail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

interface Project {
  title: string;
  description: string;
  link?: string;
}

export default function Portfolio() {
  const [projects] = useState<Project[]>([
    {
      title: "Abun.com",
      description:
        "Dyanamic Full stack developer at Abun.com, a cutting-edge AI powered SaaS platform. Contributed in the development of AI-driven features, solved complex problems, optimized cloud infrastructure, and scalable SaaS application. Tech Stack includes TypeScript React front-end, Python Django REST Framework (DRF) backend, and robust cloud architecture.",
      link: "https://abun.com",
    },
    {
      title: "Prospectss.com",
      description:
        "Played a major role as a browser extension developer at Prospectss.com, building and maintaining 25+ Premium Growth Marketing Tools for lead generation, sales, outreach and much more. Contributed in the development of scraping tools, solved complex problems, optimized existing codebase for efficiency.",
      link: "https://prospectss.com",
    },
    {
      title: "Camera App Browser Extension",
      description:
        "Achieved significant traction with over 18,000 installs and 10,000+ users worldwide. Delivered a simple user-friendly and intuitive camera application for Chrome browsers, solving problems, enhancing user experience and functionality.",
      link: "https://chromewebstore.google.com/detail/igoginokckmjjoaohbimmglmbbdnhfoi",
    },
    {
      title: "Simple Emoji Picker Extension (With Dark Mode)",
      description:
        "Simple Emoji Picker chrome extension with Fuzzy Search algorithm",
      link: "https://chromewebstore.google.com/detail/ommloefiballocabdjkaalodcajhoffi",
    },
    {
      title: "Productivity Music Player",
      description:
        "A simple offline music player browser extension with built-in white noise for better focus.",
      link: "https://chromewebstore.google.com/detail/fobhnemcgkbijhaaphehmhamdhdekggb",
    },
    {
      title: "Screen Recorder",
      description:
        "A simple and free Screen Recorder extension. Works offline, no internet connection needed. Record what's on your screen and when you're done the recorded video get saved in your downloads folder in mp4 format. Simple!",
      link: "https://chromewebstore.google.com/detail/fobhnemcgkbijhaaphehmhamdhdekggb",
    },
    {
      title: "GitHub Projects",
      description:
        "While learning web development, worked on many projects aiming to demonstrate skills in real world problem solving",
      link: "https://github.com/vineet-codes256",
    },
    {
      title: "PC Hardware Builds",
      description:
        "Specialized in crafting high-performance, sustainable, and cost-efficient PC hardware systems tailored to meet personal needs.",
    },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <header className="text-center py-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Vineet Rawat</h1>
        <p className="text-xl text-gray-600">
          Full-Stack Developer | Problem Solver | AI & Automation Strategist | Systems Thinker | Creative Innovator
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="https://github.com/vineet-codes256" target="_blank" rel="noopener noreferrer">
            <SiGithub className="w-6 h-6 text-gray-700" />
          </a>
          <a href="https://www.linkedin.com/in/vineetrawat256" target="_blank" rel="noopener noreferrer">
            <SiLinkedin className="w-6 h-6 text-gray-700" />
          </a>
          <a href="mailto:vineetrawat256@gmail.com">
            <LucideMail className="w-6 h-6 text-gray-700" />
          </a>
        </div>
      </header>

      <main>
        <section className="my-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">About Me</h2>
          <p className="text-lg text-gray-600">
            Me is a versatile jack-of-all-trades developer with a passion for technology and innovation. I&apos;m insatiably curious, constantly learning, creative problem-solving, and building solutions that make a difference. Let&rsquo;s create positive impact together!
          </p>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Skills</h2>
          <ul className="list-disc list-inside text-lg text-gray-600">
            <li>Creative Problem-Solving: Analyzing complex issues and delivering innovative solutions.</li>
            <li>Engineering Expertise: Full-stack development and hardware troubleshooting.</li>
            <li>Technical Proficiency: Python, JavaScript, React, Node.js, Flask, and AI integration.</li>
            <li>Cloud & DevOps: CI/CD pipelines, Docker, Kubernetes, AWS, GCP.</li>
            <li>Collaboration & Mentorship: Cross-functional teamwork and guiding junior developers.</li>
          </ul>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="shadow-lg hover:shadow-2xl">
                  <CardContent>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        className="text-blue-500 underline mt-2 inline-block"
                      >
                        View Project
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="my-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Contact</h2>
          <p className="text-lg text-gray-600 mb-4">
            Feel free to reach out for collaborations or opportunities.
          </p>
          <Button
            onClick={() => (window.location.href = "mailto:vineetrawat256@gmail.com")}
          >
            Contact Me
          </Button>
        </section>
      </main>
    </div>
  );
}
