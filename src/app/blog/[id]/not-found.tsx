import Link from "next/link";

export default function PostNotFound() {
  return (
    <div className="text-center py-12 bg-white dark:bg-gray-900 rounded-2xl border dark:border-gray-800 shadow-sm">
      <div className="text-6xl mb-6">📭</div>
      <h2 className="text-2xl font-bold mb-4">Bài viết không tồn tại</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Rất tiếc, bài viết blog bạn đang tìm kiếm không có trong hệ thống hoặc đã bị gỡ.
      </p>
      <Link
        href="/blog"
        className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors inline-block"
      >
        Quay lại Blog
      </Link>
    </div>
  );
}
