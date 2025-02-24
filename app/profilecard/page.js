import Image from "next/image";

export default function Home() {
  // Komponen untuk menampilkan foto profil
  const ProfileCard = ({ name, image }) => (
    <div className="flex flex-col items-center">
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="rounded-full border-4 border-white shadow-md"
      />
      <p className="mt-2 text-sm font-semibold">{name}</p>
    </div>
  );

  // Komponen untuk menampilkan kelas
  const ClassCard = ({ className, students }) => (
    <div className="bg-white shadow-lg rounded-2xl p-5 w-full max-w-md">
      <h2 className="text-lg font-bold text-center mb-4 bg-blue-500 text-white py-2 rounded-md">
        {className}
      </h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {students.map((student, index) => (
          <ProfileCard key={index} name={student.name} image={student.image} />
        ))}
      </div>
    </div>
  );

  // Data kelas & daftar teman terbaik dengan gambar dummy
  const classes = [
    {
      className: "Kelas SI",
      students: [
        { name: "Ahmad", image: "https://picsum.photos/80?random=1" },
        { name: "Budi", image: "https://picsum.photos/80?random=2" },
        { name: "Citra", image: "https://picsum.photos/80?random=3" },
        { name: "Dewi", image: "https://picsum.photos/80?random=4" },
        { name: "Eka", image: "https://picsum.photos/80?random=5" },
      ],
    },
    {
      className: "Kelas KA",
      students: [
        { name: "Fahmi", image: "https://picsum.photos/80?random=6" },
        { name: "Gita", image: "https://picsum.photos/80?random=7" },
        { name: "Hadi", image: "https://picsum.photos/80?random=8" },
        { name: "Indah", image: "https://picsum.photos/80?random=9" },
        { name: "Joko", image: "https://picsum.photos/80?random=10" },
      ],
    },
    {
      className: "Kelas BD",
      students: [
        { name: "Kiki", image: "https://picsum.photos/80?random=11" },
        { name: "Lina", image: "https://picsum.photos/80?random=12" },
        { name: "Maman", image: "https://picsum.photos/80?random=13" },
        { name: "Nina", image: "https://picsum.photos/80?random=14" },
        { name: "Omar", image: "https://picsum.photos/80?random=15" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <h1 className="text-2xl font-bold mb-6">Daftar Kelas & Teman Terbaik</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classData, index) => (
          <ClassCard
            key={index}
            className={classData.className}
            students={classData.students}
          />
        ))}
      </div>
    </div>
  );
}
