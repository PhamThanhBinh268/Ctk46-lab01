import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogPage() {
  return (
    <div>
      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
          >
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-semibold">
                {post.category}
              </span>
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>

            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
            </Link>

            <p className="text-gray-600 mb-4">{post.excerpt}</p>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-block text-blue-600 text-sm font-semibold hover:underline"
            >
              Đọc thêm →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
