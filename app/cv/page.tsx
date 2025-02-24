import React from "react";
import {
  FaUser,
  FaCode,
  FaBriefcase,
  FaFolder,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaComments,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaGit,
  FaDocker,
  FaAws,
  FaCogs,
} from "react-icons/fa";

const OnlineCV = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-stone-500 to-Stone-200 text-white-700 ">
      {/* Header/Profile Section */}
      <header className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl ">
            <img
              src="/img/wann.jpg"
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-white-800">Muhamad Ridwan</h1>
            <p className="text-xl text-white-600 mt-2">VidioGrapy</p>
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <FaGithub />
              <FaLinkedin />
              <FaEnvelope />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-stone-950 font-bold text-center mb-8 flex items-center justify-center gap-2">
            <FaUser />
            About Me
          </h2>
          <p className="text-black 600 max-w-3xl mx-auto text-center leading-relaxed">
          Saya adalah seorang mahasiswa tingkat 2 di salah satu universitas di kab bandung dan saya adalah seorang vidiograper dan seorang editor
          tetapi disisi lain saya menyukai bidang teknologi dan saya ingin mengembangkan diri saya di bidang tersebut. saya saat ini
          mengambil kuliah di jurusan sistem informasi
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gradient-to-r from-stone-700 to-Stone-300 py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <FaCode className="w-8 h-8" />
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <FaReact className="w-5 h-5" />
                Frontend
              </h3>
              <ul className="space-y-2">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Redux</li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <FaNodeJs className="w-5 h-5" />
                Backend
              </h3>
              <ul className="space-y-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <FaTools className="w-5 h-5" />
                Tools
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <FaGit className="w-4 h-4" /> Git
                </li>
                <li className="flex items-center gap-2">
                  <FaDocker className="w-4 h-4" /> Docker
                </li>
                <li className="flex items-center gap-2">
                  <FaAws className="w-4 h-4" /> AWS
                </li>
                <li className="flex items-center gap-2">
                  <FaCogs className="w-4 h-4" /> Jest
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-stone-950 text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <FaBriefcase className="w-8 h-8 text-blue-600 text-3xl text-stone-950" />
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-3xl text-stone-950">
                <FaCode className="w-5 h-5 text-blue-600 text-3xl text-stone-950" />
                Web Development
              </h3>
              <p className="text-gray-600">
                Custom web applications built with modern technologies and best
                practices.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-3xl text-stone-950">
                <FaDatabase className="w-5 h-5 text-blue-600 text-3xl text-stone-950" />
                API Development
              </h3>
              <p className="text-gray-600">
                Robust and scalable API solutions for your business needs.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-3xl text-stone-950">
                <FaCogs className="w-5 h-5 text-blue-600 text-3xl text-stone-950" />
                Technical Consulting
              </h3>
              <p className="text-gray-600">
                Expert advice on architecture and technology choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2 text-3xl text-stone-950">
            <FaFolder className="w-8 h-8 text-blue-600 text-3xl text-stone-950"/>
            Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/img/shopee.jpg"
                alt="Project 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-bold text-xl mb-2 text-3xl text-stone-950">E-commerce Platform</h3>
              <p className="text-gray-600">
                A full-featured e-commerce solution built with Next.js and
                Node.js.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/img/images.png"
                alt="Project 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-bold text-xl mb-2 text-3xl text-stone-950">Task Management App</h3>
              <p className="text-gray-600">
                A collaborative task management tool with real-time updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-stone-800 to-Stone-50 py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <FaComments className="w-8 h-8" />
            Contact Me
          </h2>
          <div className="max-w-xl mx-auto">
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="w-6 h-6" />
                  <span>MuhamadRidwan5658@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhone className="w-6 h-6" />
                  <span>+62 (814)95464406</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaGithub className="w-6 h-6" />
                  <span>github.com/MuhamadRidwan2510</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineCV;
