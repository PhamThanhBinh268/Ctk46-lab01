import Link from "next/link";
import type { Post } from "@/types/post";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";

const POSTS_API_URL = "https://jsonplaceholder.typicode.com/posts";

async function getPosts(): Promise<Post[]> {
  const response = await fetch(POSTS_API_URL, { next: { revalidate: 60 } });
  if (!response.ok) throw new Error("Không thể tải danh sách bài viết.");
  return response.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Blog</h1>
        <p className="text-muted-foreground text-lg">Những bài viết mới nhất từ hệ thống.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.slice(0, 10).map((post) => (
          <Card key={post.id} className="group hover:border-primary hover:shadow-md transition-all flex flex-col h-full">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge variant="default" className="font-semibold">Bài viết #{post.id}</Badge>
                <span className="text-sm text-muted-foreground">Tác giả #{post.userId}</span>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors leading-relaxed line-clamp-2">
                <Link href={"/blog/" + post.id}>{post.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground line-clamp-3">{post.body}</p>      
            </CardContent>
            <CardFooter className="mt-auto pt-4">
              <Link href={"/blog/" + post.id} className={buttonVariants({ variant: "link", className: "p-0 h-auto font-semibold" })}>Đọc thêm &rarr;</Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}