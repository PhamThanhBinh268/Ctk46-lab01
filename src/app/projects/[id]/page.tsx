import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/data/projects";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/projects"
        className="text-blue-600 dark:text-blue-400 hover:underline text-sm mb-6 inline-block"
      >
        ← Quay lại danh sách dự án
      </Link>

      <div className="border dark:border-gray-800 rounded-2xl p-8 bg-white dark:bg-gray-900 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <span
            className={`text-sm px-3 py-1 rounded-full font-medium ${
              project.status === "Hoàn thành"
                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
            }`}
          >
            {project.status}
          </span>
        </div>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {project.description}
        </p>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Công nghệ sử dụng</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-sm px-4 py-1.5 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Chi tiết dự án</h2>
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {(project.githubUrl || project.demoUrl) && (
          <div className="flex gap-4 border-t dark:border-gray-800 pt-6 mt-8">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-800 dark:hover:bg-gray-700 px-6 py-2.5 rounded-lg transition-colors"
              >
                Mã nguồn GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-colors"
              >
                Xem Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}
