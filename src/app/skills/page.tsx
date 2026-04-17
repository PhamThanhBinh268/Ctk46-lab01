export default function SkillsPage() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.JS",
    "Node.js",
    "Tailwind CSS",
    "SQL",
    "Git & GitHub",
    "C#",
    "Unity (cơ bản)",
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Kỹ năng lập trình</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Danh sách các công nghệ và kỹ năng em đang học tập, sử dụng trong bài tập và đồ án.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3 text-center font-medium"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}