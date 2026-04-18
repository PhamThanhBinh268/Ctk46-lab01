export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
}

export const posts: Post[] = [
  {
    slug: "gioi-thieu-nextjs",
    title: "Giới thiệu Next.JS — Framework React phổ biến nhất",
    excerpt: "Tìm hiểu tại sao Next.JS là lựa chọn hàng đầu cho phát triển web hiện đại.",
    content: `Next.JS là một React framework mạnh mẽ cung cấp các tính năng như Server-side rendering (SSR) và Static site generation (SSG).

Nó giúp các nhà phát triển xây dựng các ứng dụng web hiệu năng cao một cách nhanh chóng. 

Với Next.JS, bạn có thể dễ dàng tạo ra các website chuẩn SEO và trải nghiệm người dùng tuyệt vời.`,
    date: "2025-01-15",
    category: "Công nghệ",
  },
  {
    slug: "hoc-tailwind-css",
    title: "Học Tailwind CSS trong 10 phút",
    excerpt: "Cách sử dụng Utility-first CSS framework để xây dựng giao diện nhanh chóng.",
    content: `Tailwind CSS là một utility-first CSS framework giúp bạn xây dựng giao diện mà không cần rời khỏi file HTML.

Thay vì viết các class CSS tùy chỉnh, bạn sử dụng các class có sẵn như 'flex', 'pt-4', 'text-center'...

Điều này giúp tăng tốc quá trình phát triển và giữ cho mã nguồn gọn gàng.`,
    date: "2025-01-20",
    category: "Giao diện",
  },
  {
    slug: "typescript-can-ban",
    title: "TypeScript căn bản cho người mới bắt đầu",
    excerpt: "Tại sao bạn nên sử dụng TypeScript thay vì JavaScript thuần.",
    content: `TypeScript là một phiên bản mở rộng của JavaScript bổ sung thêm tính năng kiểm tra kiểu (static typing).

Nó giúp phát hiện lỗi sớm trong quá trình phát triển và cung cấp các công cụ hỗ trợ code tốt hơn.

Hầu hết các dự án web hiện đại ngày nay đều khuyến khích sử dụng TypeScript.`,
    date: "2025-01-25",
    category: "Lập trình",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
