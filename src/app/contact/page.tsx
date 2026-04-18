import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  const email = "2212346@dlu.edu.vn";
  const github = "https://github.com/PhamThanhBinh268";

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Liên hệ với tôi</h1>
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <p className="text-gray-600 mb-8 text-center text-lg">
          Mọi thắc mắc hoặc yêu cầu hợp tác, vui lòng liên hệ với tôi qua các kênh bên dưới.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">   
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">@</div>
            <div>
              <p className="text-sm text-blue-700 font-bold uppercase tracking-wider">Email</p>
              <a href={"mailto:" + email} className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">{email}</a>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">   
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">GH</div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">GitHub</p>
              <a href={github} target="_blank" rel="noreferrer" className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">
                github.com/PhamThanhBinh268
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">  
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">📍</div>
            <div>
              <p className="text-sm text-green-700 font-bold uppercase tracking-wider">Địa chỉ</p>
              <p className="text-lg font-medium text-gray-900">Trường Đại học Đà Lạt, Lâm Đồng</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}