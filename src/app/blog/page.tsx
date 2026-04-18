import Link from "next/link";
import type { Post } from "@/types/post";

const POSTS_API_URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts(): Promise<Post[]> {
  const response = await fetch(POSTS_API_URL, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Khong the tai danh sach bai viet.");
  }

  return response.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <div className="space-y-6">
        {posts.slice(0, 10).map((post) => (
          <article
            key={post.id}
            className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
          >
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-semibold">
                Bai viet #{post.id}
              </span>
              <span className="text-sm text-gray-500">Tac gia #{post.userId}</span>
            </div>

            <Link href={`/blog/${post.id}`}>
              <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
            </Link>

            <p className="text-gray-600 mb-4 line-clamp-3">{post.body}</p>

            <Link
              href={`/blog/${post.id}`}
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
