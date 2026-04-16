import React from "react";
import { Rocket } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          
          {/* Logo Section */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                <Rocket size={16} className="text-white" />
              </div>
              <span className="text-xl font-black tracking-tight">
                Univenture
              </span>
            </div>

            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Where ideas meet opportunity. The premier platform for startup
              founders to pitch and connect with like-minded entrepreneurs.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            
            {/* Platform */}
            <div className="flex flex-col gap-3">
              <span className="font-bold text-gray-200 uppercase tracking-wider text-xs">
                Platform
              </span>
              <a href="#" className="text-gray-400 hover:text-white">
                Browse Startups
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Submit Pitch
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Leaderboard
              </a>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-3">
              <span className="font-bold text-gray-200 uppercase tracking-wider text-xs">
                Company
              </span>
              <a href="#" className="text-gray-400 hover:text-white">
                About Us
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Blog
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Careers
              </a>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-3">
              <span className="font-bold text-gray-200 uppercase tracking-wider text-xs">
                Legal
              </span>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Univenture. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Where ideas meet opportunity.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;