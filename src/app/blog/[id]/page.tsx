import Link from "next/link";
import { notFound } from "next/navigation";
import type { Comment, Post, User } from "@/types/post";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

async function getPost(id: string): Promise<Post | null> {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    return null;
  }

  const post = (await response.json()) as Post;

  if (!post?.id) {
    return null;
  }

  return post;
}

async function getUser(id: number): Promise<User | null> {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}

async function getComments(postId: string): Promise<Comment[]> {
  const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    return [];
  }

  return response.json();
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;

  const postPromise = getPost(id);
  const userPromise = postPromise.then((post) => (post ? getUser(post.userId) : Promise.resolve(null)));
  const commentsPromise = getComments(id);

  const [post, user, comments] = await Promise.all([postPromise, userPromise, commentsPromise]);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link href="/blog" className="text-blue-600 hover:underline text-sm mb-6 inline-block">
        ← Quay lại danh sách
      </Link>

      <article className="mb-10">
        <header className="mb-8">
          <div className="flex gap-2 mb-2 flex-wrap">
            <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
              Bài viết #{post.id}
            </span>
            <span className="text-xs text-gray-500 py-1">Tác giả ID: {post.userId}</span>
          </div>
          <h1 className="text-4xl font-bold mb-3">{post.title}</h1>

          {user && (
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <span className="font-semibold">Tác giả:</span> {user.name} ({user.username})
              </p>
              <p>
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-semibold">Website:</span> {user.website}
              </p>
            </div>
          )}
        </header>

        <div className="prose max-w-none text-gray-700 whitespace-pre-line leading-relaxed">
          {post.body}
        </div>
      </article>

      <section>
        <h2 className="text-2xl font-bold mb-4">Bình luận ({comments.length})</h2>
        <div className="space-y-4">
          {comments.map((comment) => (
            <article key={comment.id} className="border rounded-lg p-4 bg-white">
              <h3 className="font-semibold text-gray-900">{comment.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{comment.email}</p>
              <p className="text-gray-700 whitespace-pre-line">{comment.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
