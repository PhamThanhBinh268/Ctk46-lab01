import Link from "next/link";
import Counter from "@/components/counter";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Hero section */}
      <div className="text-center mb-16">
        <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-4xl">V</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Xin chào! Tôi là <span className="text-blue-600 dark:text-blue-400">Phan Ngọc Vỹ</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          MSSV 2212499, sinh viên IT trường Đại học Đà Lạt. Tôi thích chill, chơi game và phát triển các sản phẩm phần mềm thực tế.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            Xem dự án
          </Link>
          <Link
            href="/contact"
            className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Liên hệ
          </Link>
        </div>
      </div>

      {/* Skills section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Kỹ năng</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.JS",
            "Tailwind CSS",
            "Node.js",
            "Git",
            "SQL",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-center hover:bg-blue-50 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border dark:border-gray-800"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Counter Demo */}
      <div className="mb-16 border rounded-2xl p-8 text-center border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold mb-3">Tương tác Client Component</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Thử nghiệm component Counter sử dụng &#34;use client&#34;
        </p>
        <div className="flex justify-center">
          <Counter />
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Khám phá kỹ năng của tôi</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Xem danh sách kỹ năng lập trình, công nghệ và công cụ tôi đang sử dụng.
        </p>
        <Link href="/skills" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
          Xem trang kỹ năng →
        </Link>
      </div>
    </div>
  );
}
