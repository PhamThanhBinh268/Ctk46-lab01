import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/data/posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) { notFound(); }

  return (
    <div className="max-w-3xl mx-auto">
      <Link href="/blog" className="text-blue-600 hover:underline text-sm mb-6 inline-block">
        ← Quay lại danh sách
      </Link>
      <article>
        <header className="mb-8">
          <div className="flex gap-2 mb-2">
            <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-gray-500 py-1">
              {post.date}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        </header>
        <div className="prose max-w-none text-gray-700 whitespace-pre-line leading-relaxed">
          {post.content}
        </div>
      </article>
    </div>
  );
}
