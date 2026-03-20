export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10 mt-auto border-t-[1px] border-slate-800">
      <div className="w-[1200px] mx-auto px-4 flex justify-between items-start">
        
        {/* Thông tin Web */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Y8 CLONE GAMES</h3>
          <p className="text-sm max-w-sm leading-relaxed">
            Nền tảng chơi game trực tuyến miễn phí. Không cần cài đặt, không cần đăng ký. Chơi trực tiếp trên trình duyệt của bạn.
          </p>
        </div>
        
        {/* Links */}
        <div className="text-sm text-right">
          <p className="font-bold text-white mb-3">Thông tin</p>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Bản quyền */}
      <div className="w-[1200px] mx-auto px-4 mt-8 pt-6 border-t border-slate-800 text-sm text-center">
        © {new Date().getFullYear()} Y8 Clone Portal. All rights reserved.
      </div>
    </footer>
  );
}