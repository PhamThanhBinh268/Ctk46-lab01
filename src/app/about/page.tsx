export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Giới thiệu về tôi</h1>

      <div className="prose max-w-none text-gray-700 space-y-6">
        <p className="text-lg leading-relaxed">
          Chào bạn! Tôi là <strong className="text-blue-600">Phạm Thanh Bình</strong>, một sinh viên ngành Công nghệ Thông tin tại Trường Đại học Đà Lạt (Lớp CTK46A - MSSV: 2212346).
        </p>
        
        <p>
          Tôi luôn khao khát học hỏi và cập nhật các công nghệ mới nhất trong lĩnh vực phát triển phần mềm.
          Mục tiêu của tôi là trở thành một Full-stack Developer chuyên nghiệp, tạo ra những ứng dụng có ích cho cộng động.
        </p>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b pb-2">Kỹ năng chuyên môn</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-700 mb-2">Frontend</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>React / Next.js</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-700 mb-2">Backend</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Node.js / Express</li>
                <li>PostgreSQL / MySQL</li>
                <li>RESTful API</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b pb-2">Học vấn</h2>
          <div className="border-l-4 border-blue-600 pl-4 py-2">
            <h3 className="font-bold text-xl">Trường Đại học Đà Lạt</h3>
            <p className="text-gray-600">Cử nhân Công nghệ Thông tin (Dự kiến tốt nghiệp 2026)</p>
            <p className="mt-2 text-sm italic italic text-gray-500">
              Các học phần tiêu biểu: Cấu trúc dữ liệu và giải thuật, Phát triển ứng dụng Web, Các công nghệ mới trong PTPM...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
