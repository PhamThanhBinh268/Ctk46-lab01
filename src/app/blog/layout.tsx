export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Nội dung chính */}
        <div className="flex-1">{children}</div>

        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border dark:border-gray-800">
            <h3 className="font-semibold mb-3">Danh mục</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Công nghệ</li>
              <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Học tập</li>
              <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Dự án cá nhân</li>
              <li className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">Cuộc sống</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
