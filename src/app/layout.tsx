import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-gray-50 font-sans text-gray-800 min-h-screen flex flex-col">
        {/* Header luôn nằm trên cùng */}
        <Header />
        
        {/* Nội dung thay đổi theo từng trang sẽ hiển thị ở đây */}
        <div className="flex-1">
          {children}
        </div>

        {/* Footer luôn nằm dưới cùng */}
        <Footer />
      </body>
    </html>
  );
}