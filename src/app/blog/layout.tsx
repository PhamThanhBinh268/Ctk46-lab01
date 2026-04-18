export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="blog-container">
      <div className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Chuyên mục Blog</h1>
        <p className="text-gray-600">Chia sẻ kiến thức, kinh nghiệm và những điều thú vị về lập trình.</p>
      </div>
      <div>{children}</div>
    </div>
  );
}
