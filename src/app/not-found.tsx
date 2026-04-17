import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24 text-center">
      <div className="mb-8">
        <h1 className="text-8xl font-bold text-gray-200 dark:text-gray-800">404</h1>
      </div>
      
      <h2 className="text-3xl font-bold mb-4">Không tìm thấy trang</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
        Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển sang một liên kết khác.
      </p>
      
      <Link
        href="/"
        className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors inline-block font-medium shadow-sm"
      >
        Về trang chủ
      </Link>
    </div>
  );
}
