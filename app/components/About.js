// components/About.js
import { BarChart2, Award, BookOpen } from "lucide-react";
import profilridwan from "./../../public/img/wann.jpg";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text--bold text-gray-800">
            About Me
          </h2>
          <div className="mt-2 w-16 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate data analyst with a mission to help businesses make
            better decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Hello, I'm <span className="text-indigo-600">Muhamad Ridwan</span>
            </h3>
            <p className="text-gray-600 mb-4">
              hallo, perkenalkan nama saya muhamad ridwan,saya seorang
              mahasiswan tingkat 2 yang sedang melanjutkan pendidikan saya di
              universitas Ma'soem
            </p>
            <p className="text-gray-600 mb-6">
              saya ingin memiliki mimpi untuk menjadi seorang programmer yang
              bisa membuat aplikasi yang bermanfaat bagi masyarakat, dan berguna
              bagi negara dan dan keluarga
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <BarChart2 className="text-indigo-600 mr-2" size={20} />
                <span className="text-gray-700">Data Analysis</span>
              </div>
              <div className="flex items-center">
                <Award className="text-indigo-600 mr-2" size={20} />
                <span className="text-gray-700">Certified Analyst</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="text-indigo-600 mr-2" size={20} />
                <span className="text-gray-700">MBA Graduate</span>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-medium px-6 py-3 rounded-md transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>

          <div className="order-1 md:order-2">
            <Image
              src={profilridwan}
              alt="Wawan Garage"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
