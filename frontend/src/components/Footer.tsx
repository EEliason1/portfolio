import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-black text-gray-500 text-center py-4">
    <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    <p className="text-sm mt-2">
      Built with <span className="text-white">React</span>,{" "}
      <span className="text-white">Tailwind CSS</span>, and{" "}
      <span className="text-white">TypeScript</span>.
    </p>
  </footer>
);

export default Footer;
