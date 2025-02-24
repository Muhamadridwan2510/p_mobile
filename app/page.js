import React from 'react';

// Data teman-teman untuk setiap kelas
const classData = {
  SI: {
    className: "Sistem Informasi",
    students: [
      { id: 1, name: "Andi", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andi" },
      { id: 2, name: "Budi", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi" },
      { id: 3, name: "Cindy", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cindy" },
      { id: 4, name: "Diana", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Diana" },
      { id: 5, name: "Eko", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Eko" }
    ]
  },
  KA: {
    className: "Komputer Akuntansi",
    students: [
      { id: 1, name: "Farhan", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Farhan" },
      { id: 2, name: "Gita", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gita" },
      { id: 3, name: "Hadi", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hadi" },
      { id: 4, name: "Indah", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Indah" },
      { id: 5, name: "Joko", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joko" }
    ]
  },
  BD: {
    className: "Bisnis Digital",
    students: [
      { id: 1, name: "Kevin", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin" },
      { id: 2, name: "Linda", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Linda" },
      { id: 3, name: "Mario", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mario" },
      { id: 4, name: "Nina", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nina" },
      { id: 5, name: "Oscar", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Oscar" }
    ]
  }
};

// Komponen untuk Profile Picture
const ProfilePicture = ({ image, name }) => (
  <div className="flex flex-col items-center m-2 transform transition-transform duration-300 hover:scale-110">
    <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg hover:shadow-xl border-2 border-blue-200 hover:border-blue-400">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover bg-gray-50"
      />
    </div>
    <span className="text-sm mt-2 font-medium text-gray-700 hover:text-blue-600">{name}</span>
  </div>
);

// Komponen untuk Class Card
const ClassCard = ({ className, students }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 m-4 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
    <h2 className="text-xl font-bold text-center mb-6 text-gray-800 border-b pb-3 border-gray-200">{className}</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {students.map(student => (
        <ProfilePicture 
          key={student.id} 
          image={student.image} 
          name={student.name} 
        />
      ))}
    </div>
  </div>
);

// Komponen Utama
const ClassFriends = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 tracking-wide">
          Daftar Kelas dan Teman
        </h1> 
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(classData).map(([key, data]) => (
            <ClassCard 
              key={key}
              className={data.className}
              students={data.students}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassFriends;