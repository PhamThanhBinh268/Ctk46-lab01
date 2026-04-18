"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="py-24 text-center">
      <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
        ⚠
      </div>
      <h2 className="text-3xl font-bold mb-4">Đã xảy ra lỗi!</h2>
      <p className="text-gray-600 mb-4 max-w-md mx-auto">
        Chúng tôi rất tiếc vì sự cố này. Vui lòng thử tải lại trang hoặc bấm nút bên dưới để khôi phục.
      </p>
      {error.message && (
        <p className="text-xs text-red-400 mb-8 max-w-md mx-auto font-mono">
          {error.message}
        </p>
      )}
      <button
        onClick={() => reset()}
        className="bg-gray-900 text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors font-bold"
      >
        Thử lại
      </button>
    </div>
  );
}
