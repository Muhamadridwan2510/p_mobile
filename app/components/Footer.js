// components/Footer.js
import Link from "next/link";
import { Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8npm install lucide-react">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Muhamad ridwan</h3>
            <p className="text-gray-400 mb-4">
              Professional data analyst helping businesses make data-driven
              decisions through advanced analytics and visualization techniques.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {" "}
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              ></a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Camera size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              ></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about">
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#skills">
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                    Skills
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#services">
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#portfolio">
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                    Portfolio
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Data Analysis</li>
              <li className="text-gray-400">Business Intelligence</li>
              <li className="text-gray-400">Data Visualization</li>
              <li className="text-gray-400">Predictive Analytics</li>
              <li className="text-gray-400">Data Integration</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Designed with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
