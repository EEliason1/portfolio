import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white text-center p-4 mt-8">
    <p className="text-sm">
      © {new Date().getFullYear()} My Portfolio. All rights reserved.
    </p>
    <p className="text-xs mt-2">
      Built with React, Tailwind CSS, and TypeScript | Powered by Node.js and MongoDB
    </p>
  </footer>
);

export default Footer;
