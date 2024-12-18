import React from "react";
import PageWrapper from "../components/PageWrapper";

const About: React.FC = () => (
  <PageWrapper>
    <section className="p-8 text-center">
      <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
      <p className="text-lg text-gray-300">
        I am a passionate software engineer with experience in modern web development technologies.
        I specialize in building scalable, high-quality applications using tools like React, Node.js, and MongoDB.
      </p>
      <p className="text-lg text-gray-300 mt-4">
        My goal is to solve challenging problems and continuously learn new technologies. When I’m not coding, I enjoy exploring design trends, contributing to open-source, and sharing my knowledge with others.
      </p>
    </section>
  </PageWrapper>
);

export default About;
