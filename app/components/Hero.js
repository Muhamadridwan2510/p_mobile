// components/Hero.js
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import profilridwan from "./../../public/img/hero.jpg";
export default function Hero() {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Turning <span className="text-indigo-600">Data</span> Into
              Meaningful <span className="text-indigo-600">Insights</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Helping businesses make data-driven decisions through advanced
              analytics and visualization techniques.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 text-center flex items-center justify-center"
              >
                Explore Services
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a
                href="#contact"
                className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium px-6 py-3 rounded-md transition-colors duration-300 text-center"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src={profilridwan}
              alt="Data Analytics Illustration"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
