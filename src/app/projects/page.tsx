import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Dự án cá nhân</h1>
        <p className="text-gray-600">Những sản phẩm và đồ án tiêu biểu em đã thực hiện trong quá trình học tập.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group border border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all bg-white"
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                {project.title}
              </h2>
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full ${
                  project.status === "Hoàn thành"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-gray-600 mb-6 line-clamp-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-md font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-auto">
              <Link 
                href={`/projects/${project.id}`} 
                className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                Chi tiết <span>→</span>
              </Link>
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-gray-500 hover:text-gray-900"
                >
                  Source 
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
