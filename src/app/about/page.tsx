export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Giới thiệu</h1>

      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <p>
          Xin chào! Tôi là <strong>Phan Ngọc Vỹ</strong> (MSSV <strong>2212499</strong>), sinh viên ngành Công nghệ Thông tin tại
          Đại học Đà Lạt.
        </p>
        <p>
          Tôi có định hướng theo mảng phát triển phần mềm, đặc biệt là web/app. Ngoài giờ học và làm dự án, tôi thích
          chill, chơi game và tìm cảm hứng từ các sản phẩm công nghệ mới.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">Kỹ năng</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>JavaScript / TypeScript</li>
          <li>React & Next.JS</li>
          <li>Tailwind CSS</li>
          <li>Git & GitHub</li>
          <li>SQL & PostgreSQL</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">Học vấn</h2>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border dark:border-gray-800">
          <p className="font-medium text-gray-900 dark:text-gray-100">Đại học Đà Lạt</p>
          <p className="text-gray-500 dark:text-gray-400">Cử nhân Công nghệ Thông tin (2022 — 2026)</p>
        </div>
      </div>
    </div>
  );
}
