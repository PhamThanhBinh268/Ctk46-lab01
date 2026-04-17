import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Dự án</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border dark:border-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col bg-white dark:bg-gray-900"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">
                <Link href={`/projects/${project.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {project.title}
                </Link>
              </h2>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  project.status === "Hoàn thành"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-sm px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <Link href={`/projects/${project.id}`} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Xem chi tiết →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
