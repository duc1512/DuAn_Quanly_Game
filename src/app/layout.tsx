import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css"; 

export const metadata = {
  title: "Y8 Clone Portal",
  description: "A simple Y8 clone frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Thêm flex-col và min-h-screen để căn chỉnh Footer */}
      <body className="bg-slate-50 text-slate-900 font-sans min-h-screen flex flex-col">
        
        <Header />
        
        {/* flex-1 giúp vùng nội dung chính giãn ra, đẩy Footer xuống đáy */}
        <main className="w-[1200px] mx-auto py-8 px-4 flex-1">
          {children}
        </main>
        
        <Footer />
        
      </body>
    </html>
  );
}