// components/Services.js
"use client";

import { Database, TrendingUp, PieChart, LineChart, Layers, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Data Analysis",
      description: "Transform raw data into actionable insights with comprehensive analysis services.",
      icon: <Database className="w-12 h-12 text-indigo-600" />
    },
    {
      title: "Business Intelligence",
      description: "Custom dashboards and reports to track KPIs and visualize business performance.",
      icon: <TrendingUp className="w-12 h-12 text-indigo-600" />
    },
    {
      title: "Data Visualization",
      description: "Clear, compelling visualizations that tell your data story effectively.",
      icon: <PieChart className="w-12 h-12 text-indigo-600" />
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and outcomes using advanced statistical models and machine learning.",
      icon: <LineChart className="w-12 h-12 text-indigo-600" />
    },
    {
      title: "Data Integration",
      description: "Connect and consolidate multiple data sources for a unified view of your business.",
      icon: <Layers className="w-12 h-12 text-indigo-600" />
    },
    {
      title: "Data Strategy Consulting",
      description: "Develop a robust data strategy aligned with your business objectives.",
      icon: <Users className="w-12 h-12 text-indigo-600" />
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">My Services</h2>
          <div className="mt-2 w-16 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive data solutions to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-1 border border-gray-100"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to harness the power of your data?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Let's discuss how my data analytics services can help your business make better decisions and drive growth.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-indigo-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-md transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}