"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
          <div className="max-w-md w-full p-8 text-center bg-white dark:bg-gray-900 shadow-lg rounded-xl border dark:border-gray-800">
            <div className="text-6xl mb-6">🚨</div>
            <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
              Lỗi nghiêm trọng
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {error.message || "Có vấn đề xảy ra ở mức toàn cục ứng dụng."}
            </p>
            <button
              onClick={() => reset()}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Cố gắng khôi phục
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
