export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-6 border-t dark:border-gray-800 transition-colors mt-auto">
      <div className="max-w-5xl mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p className="mb-2">© 2026 — Phan Ngọc Vỹ (2212499) | CTK46 — Các công nghệ mới trong PTPM</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://github.com/PhanNgocVyMSSV2212499" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            GitHub
          </a>
          <a href="mailto:2212499@d;u.edu.vn" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
