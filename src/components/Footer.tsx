export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      {/* Đã sửa dòng dưới đây cho Footer */}
      <div className="w-full px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">ShopNext</h3>
          <p className="text-sm text-gray-400 max-w-md mb-6">
            Nền tảng mua sắm trực tuyến hàng đầu, mang đến cho bạn những trải nghiệm mua sắm tuyệt vời và an toàn nhất.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Hỗ trợ khách hàng</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Trung tâm trợ giúp</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Chính sách đổi trả</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Đăng ký nhận tin</h4>
          <div className="flex mt-3">
            <input 
              type="email" 
              placeholder="Email của bạn..." 
              className="bg-gray-800 text-white border-none px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm" 
            />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition font-medium text-sm">
              Gửi
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}