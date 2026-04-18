import Link from "next/link";

export default function HomePage() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-5xl font-extrabold mb-6">
        Chào mừng đến với <span className="text-blue-600">Portfolio</span> của tôi
      </h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Tôi là Phạm Thanh Bình, một nhà phát triển web đam mê từ lớp CTK46A.
        Đây là nơi tôi chia sẻ các dự án và kiến thức lập trình của mình.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/projects"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Xem dự án
        </Link>
        <Link
          href="/blog"
          className="border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
        >
          Đọc Blog
        </Link>
      </div>
      
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold mb-3 text-blue-600">Phát triển Web</h3>
          <p className="text-gray-600">Xây dựng các ứng dụng web hiện đại sử dụng React, Next.js và Tailwind CSS.</p>
        </div>
        <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold mb-3 text-blue-600">Thiết kế UI/UX</h3>
          <p className="text-gray-600">Tạo ra các giao diện người dùng trực quan, thân thiện và tối ưu hóa trải nghiệm.</p>
        </div>
        <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold mb-3 text-blue-600">Viết Blog</h3>
          <p className="text-gray-600">Chia sẻ các bài viết chuyên sâu về công nghệ và kinh nghiệm làm nghề lập trình.</p>
        </div>
      </div>
    </div>
  );
}
