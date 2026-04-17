import CopyButton from "@/components/copy-button";

export default function ContactPage() {
  const email = "2212499@d;u.edu.vn";
  const github = "https://github.com/PhanNgocVyMSSV2212499";
  
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Liên hệ</h1>

      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 space-y-4 border dark:border-gray-800">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                {email}
              </a>
            </p>
            <CopyButton textToCopy={email} />
          </div>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                github.com/PhanNgocVyMSSV2212499
              </a>
            </p>
            <CopyButton textToCopy={github} />
          </div>

          <p>
            <strong>Địa chỉ:</strong> Đại học Đà Lạt, 01 Phù Đổng Thiên Vương, Đà Lạt
          </p>
        </div>
      </div>
    </div>
  );
}
