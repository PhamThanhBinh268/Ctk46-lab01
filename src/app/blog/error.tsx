"use client";

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="text-center py-12 bg-white dark:bg-gray-900 rounded-lg border dark:border-gray-800">
      <div className="text-4xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
        Đã xảy ra lỗi tại trang Blog!
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        {error.message || "Không thể tải nội dung blog. Vui lòng thử lại."}
      </p>
      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Thử lại
      </button>
    </div>
  );
}
