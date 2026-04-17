export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
}

export const posts: Post[] = [
  {
    slug: "gioi-thieu-nextjs",
    title: "Giới thiệu Next.JS — Framework React phổ biến nhất",
    excerpt: "Tìm hiểu tại sao Next.JS là lựa chọn hàng đầu cho phát triển web hiện đại.",
    content: `Next.JS là một React framework mạnh mẽ được phát triển bởi Vercel. 
Nó cung cấp nhiều tính năng quan trọng như Server-Side Rendering (SSR), 
Static Site Generation (SSG), và App Router.

Một số ưu điểm nổi bật của Next.JS:
- Routing tự động dựa trên cấu trúc thư mục
- Hỗ trợ Server Components và Client Components
- Tối ưu hóa hình ảnh, font, và scripts tự động
- API Routes tích hợp
- Hỗ trợ TypeScript sẵn có`,
    date: "2026-03-15",
    category: "Công nghệ",
    author: "Phan Ngọc Vỹ",
  },
  {
    slug: "hoc-tailwind-css",
    title: "Tailwind CSS — Cách tiếp cận mới cho CSS",
    excerpt: "Khám phá phương pháp utility-first CSS và tại sao nó thay đổi cách viết CSS.",
    content: `Tailwind CSS là một utility-first CSS framework, nghĩa là thay vì viết 
CSS tùy chỉnh, bạn sử dụng các class tiện ích có sẵn để xây dựng giao diện.

Ví dụ, thay vì viết:
.card { padding: 16px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }

Bạn viết trực tiếp trong HTML:
<div class="p-4 rounded-lg shadow-md">...</div>

Ưu điểm:
- Không cần đặt tên class
- Không cần chuyển qua lại giữa file HTML và CSS
- File CSS cuối cùng rất nhỏ (chỉ chứa class đã dùng)`,
    date: "2026-03-20",
    category: "Công nghệ",
    author: "Phan Ngọc Vỹ",
  },
  {
    slug: "kinh-nghiem-hoc-lap-trinh",
    title: "Chia sẻ kinh nghiệm tự học lập trình hiệu quả",
    excerpt: "Những bài học rút ra sau thời gian dài học tập ở đại học.",
    content: `Sau quá trình học tập và thực hành lập trình, tôi rút ra một số kinh 
nghiệm quan trọng:

1. Thực hành nhiều hơn đọc lý thuyết
Lập trình là kỹ năng thực hành. Đọc sách và xem video chỉ chiếm 30%, 
70% còn lại là viết code.

2. Xây dựng dự án thực tế
Không gì tốt hơn việc xây dựng một sản phẩm thực tế để học. 
Hãy bắt đầu từ những dự án nhỏ và tăng dần độ phức tạp.

3. Tham gia cộng đồng
Tham gia các cộng đồng lập trình để học hỏi và chia sẻ kinh nghiệm.`,
    date: "2026-04-01",
    category: "Học tập",
    author: "Phan Ngọc Vỹ",
  },
  {
    slug: "quan-ly-thoi-gian",
    title: "Kỹ năng quản lý thời gian cho sinh viên IT",
    excerpt: "Làm thế nào để cân bằng giữa học tập, code và cuộc sống cá nhân?",
    content: `Với khối lượng kiến thức khổng lồ cần nạp, sinh viên IT dễ gặp phải tình trạng quá tải.

Bí quyết của tôi:
- Sử dụng phương pháp Pomodoro để tập trung code.
- Áp dụng ma trận Eisenhower để sắp xếp độ ưu tiên của deadline.
- Dành thời gian nghỉ ngơi thiết yếu để não bộ lấy lại năng lượng.`,
    date: "2026-04-10",
    category: "Cuộc sống",
    author: "Phan Ngọc Vỹ",
  },
  {
    slug: "tim-hieu-git",
    title: "Sử dụng Git & GitHub trong dự án cá nhân",
    excerpt: "Tầm quan trọng của việc quản lý phiên bản source code khi học tập.",
    content: `Git là công cụ bắt buộc phải biết với lập trình viên. 
Các lệnh cơ bản cần ghi nhớ:
- git clone
- git status & git log
- git commit và git push
Luôn tập thói quen commit sau mỗi tính năng (hoặc theo Conventional Commits). Việc này giúp nhìn lại quá trình học tập dễ dàng hơn.`,
    date: "2026-04-15",
    category: "Công nghệ",
    author: "Phan Ngọc Vỹ",
  }
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
