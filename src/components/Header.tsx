export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Đã sửa dòng dưới đây để chiếm full màn hình */}
      <div className="w-full px-4 md:px-8 lg:px-12 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold text-indigo-600 tracking-tight cursor-pointer">
          ShopNext
        </div>
        
        <div className="hidden md:flex flex-1 max-w-2xl mx-12">
          <input 
            type="text" 
            placeholder="Tìm kiếm sản phẩm, thương hiệu..." 
            className="w-full border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-indigo-500"
          />
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-r-md hover:bg-indigo-700 transition">
            🔍
          </button>
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-indigo-600 flex items-center transition">
            <span className="text-xl">👤</span>
            <span className="ml-2 hidden text-sm font-medium md:block">Tài khoản</span>
          </button>
          <button className="text-gray-600 hover:text-indigo-600 flex items-center relative transition">
            <span className="text-xl">🛒</span>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}