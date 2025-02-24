"use client";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import profilridwan from "./../../public/img/image.png";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "E-commerce Sales Analysis",
      category: "dashboard",
      image: profilridwan,
      description:
        "Created an interactive dashboard to track sales performance and customer behavior for an online retailer.",
      tools: ["Tableau", "SQL", "Excel"],
    },
    {
      title: "Customer Segmentation Model",
      category: "analysis",
      image: profilridwan,
      description:
        "Developed a machine learning model to segment customers based on purchasing behavior.",
      tools: ["Python", "Scikit-learn", "Pandas"],
    },
    {
      title: "Financial Performance Dashboard",
      category: "dashboard",
      image: profilridwan,
      description:
        "Designed a comprehensive financial dashboard tracking KPIs, revenue streams, and expense categories.",
      tools: ["Power BI", "DAX", "SQL Server"],
    },
    {
      title: "Market Basket Analysis",
      category: "analysis",
      image: profilridwan,
      description:
        "Analyzed transaction data to identify product associations and recommend bundle opportunities.",
      tools: ["R", "Apriori Algorithm", "Data Mining"],
    },
    {
      title: "Supply Chain Optimization",
      category: "prediction",
      image: profilridwan,
      description:
        "Built a predictive model to optimize inventory levels and reduce stockouts.",
      tools: ["Python", "Time Series Analysis", "Forecasting"],
    },
    {
      title: "Social Media Performance Tracker",
      category: "dashboard",
      image: profilridwan,
      description:
        "Created a real-time dashboard tracking engagement metrics across multiple social platforms.",
      tools: ["Tableau", "API Integration", "Data Visualization"],
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            My Portfolio
          </h2>
          <div className="mt-2 w-16 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of my recent data analytics projects and solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              filter === "all"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("dashboard")}
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              filter === "dashboard"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Dashboards
          </button>
          <button
            onClick={() => setFilter("analysis")}
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              filter === "analysis"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Analysis Projects
          </button>
          <button
            onClick={() => setFilter("prediction")}
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              filter === "prediction"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Predictive Models
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  View Details <ExternalLink className="ml-1" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
