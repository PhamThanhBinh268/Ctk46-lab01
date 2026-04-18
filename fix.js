const fs = require('fs');

const guestbookCode = `"use server";
import { z } from "zod";
import { guestbookEntries, type GuestbookEntry } from "@/data/guestbook";
import { revalidatePath } from "next/cache";

const rateLimitMap = new Map<string, number>();

const guestbookSchema = z.object({
  name: z.string().min(2, "Tên phải có ít nhất 2 ký tự").max(50, "Tên không được vượt quá 50 ký tự"),
  message: z.string().min(1, "Lời nhắn không để trống").max(500, "Lời nhắn không vượt quá 500 ký tự"),
});

export type ActiveState = { success: boolean; message: string; errors?: Record<string, string[]>; };

export async function createGuestbookEntry(prevState: ActiveState | null, formData: FormData): Promise<ActiveState> {
  try {
    const rawData = { name: formData.get("name")?.toString() || "", message: formData.get("message")?.toString() || "" };
    const now = Date.now();
    const lastSubmitTime = rateLimitMap.get(rawData.name);
    if (lastSubmitTime && now - lastSubmitTime < 60000) return { success: false, message: "Bạn gửi quá nhanh." };
    const validatedFields = guestbookSchema.safeParse(rawData);
    if (!validatedFields.success) return { success: false, message: "Dữ liệu không hợp lệ.", errors: validatedFields.error.flatten().fieldErrors };
    const newEntry: GuestbookEntry = { id: Date.now().toString() + Math.random().toString(36).substring(2, 9), name: validatedFields.data.name.trim(), message: validatedFields.data.message.trim(), createdAt: new Date().toISOString() };
    guestbookEntries.unshift(newEntry);
    rateLimitMap.set(rawData.name, now);
    revalidatePath("/guestbook");
    return { success: true, message: "Gửi lời nhắn thành công!" };
  } catch (err) {
    return { success: false, message: "Lỗi hệ thống." };
  }
}

export async function deleteGuestbookEntry(id: string) {
  try {
    const index = guestbookEntries.findIndex((entry) => entry.id === id);
    if (index !== -1) { guestbookEntries.splice(index, 1); revalidatePath("/guestbook"); return { success: true }; }
    return { success: false, error: "Không tìm thấy." };
  } catch (err) { return { success: false, error: "Lỗi hệ thống." }; }
}
`;
fs.writeFileSync('src/app/guestbook/actions.ts', guestbookCode);

const blogCode = `import Link from "next/link";
import type { Post } from "@/types/post";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
              <Button asChild variant="link" className="p-0 h-auto font-semibold">
                <Link href={"/blog/" + post.id}>Đọc thêm &rarr;</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}`;
fs.writeFileSync('src/app/blog/page.tsx', blogCode);

const contactCode = `import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  const email = "2212346@dlu.edu.vn";
  const github = "https://github.com/PhamThanhBinh268";

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Liên hệ với tôi</h1>
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <p className="text-gray-600 mb-8 text-center text-lg">
          Mọi thắc mắc hoặc yêu cầu hợp tác, vui lòng liên hệ với tôi qua các kênh bên dưới.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">   
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">@</div>
            <div>
              <p className="text-sm text-blue-700 font-bold uppercase tracking-wider">Email</p>
              <a href={"mailto:" + email} className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">{email}</a>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">   
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">GH</div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">GitHub</p>
              <a href={github} target="_blank" rel="noreferrer" className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">
                github.com/PhamThanhBinh268
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">  
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">📍</div>
            <div>
              <p className="text-sm text-green-700 font-bold uppercase tracking-wider">Địa chỉ</p>
              <p className="text-lg font-medium text-gray-900">Trường Đại học Đà Lạt, Lâm Đồng</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}`;
fs.writeFileSync('src/app/contact/page.tsx', contactCode);

const projectCode = `import Link from "next/link";
import { projects } from "@/data/projects";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Dự án cá nhân</h1>
        <p className="text-muted-foreground text-lg">
          Những sản phẩm và đồ án tiêu biểu em đã thực hiện trong quá trình học tập.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="group hover:border-primary hover:shadow-lg transition-all flex flex-col h-full">
            <CardHeader className="flex flex-row items-start justify-between space-y-0.5">
              <CardTitle className="text-2xl group-hover:text-primary transition-colors line-clamp-1">{project.title}</CardTitle>
              <Badge variant={project.status === "Hoàn thành" ? "default" : "secondary"}>
                {project.status}
              </Badge>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <p className="text-muted-foreground line-clamp-2" title={project.description}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="outline" className="font-medium">{t}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between mt-auto">
              <Button asChild variant="link" className="p-0 h-auto font-semibold">
                <Link href={"/projects/" + project.id}>Chi tiết &rarr;</Link>
              </Button>
              {project.githubUrl && (
                <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">Source Code</a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}`;
fs.writeFileSync('src/app/projects/page.tsx', projectCode);
