// components/Skills.js
export default function Skills() {
    const technicalSkills = [
      { name: "Data Analysis", level: 90 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 90 },
      { name: "R", level: 75 },
      { name: "Tableau", level: 80 },
      { name: "Power BI", level: 85 },
      { name: "Machine Learning", level: 70 },
      { name: "Statistics", level: 85 }
    ];
  
    const softSkills = [
      { name: "Problem Solving", icon: "🧩" },
      { name: "Communication", icon: "💬" },
      { name: "Project Management", icon: "📋" },
      { name: "Critical Thinking", icon: "🔍" },
      { name: "Teamwork", icon: "👥" },
      { name: "Adaptability", icon: "🔄" }
    ];
  
    return (
      <section id="skills" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">My Skills</h2>
            <div className="mt-2 w-16 h-1 bg-indigo-600 mx-auto"></div>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              The tools and technologies I use to turn data into actionable insights
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 rounded-full bg-indigo-600" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <h4 className="font-medium text-gray-800">{skill.name}</h4>
                  </div>
                ))}
              </div>
  
              <div className="mt-8 bg-indigo-100 p-6 rounded-lg border border-indigo-200">
                <h4 className="font-bold text-indigo-800 mb-2">Certifications</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-indigo-600">✓</span>
                    Microsoft Certified: Data Analyst Associate
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-indigo-600">✓</span>
                    Google Data Analytics Professional Certificate
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2 text-indigo-600">✓</span>
                    IBM Data Science Professional Certificate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }