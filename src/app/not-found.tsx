import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-9xl font-extrabold text-blue-100">404</h1>
      <div className="-mt-12">
        <h2 className="text-3xl font-bold mb-4">Trang không tồn tại</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Xin lỗi, chúng tôi không thể tìm thấy trang mà bạn đang yêu cầu. Vui lòng kiểm tra lại đường dẫn hoặc quay về trang chủ.
        </p>
        <Link
          href="/"
          className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors inline-block font-bold shadow-lg shadow-blue-200"
        >
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  );
}
