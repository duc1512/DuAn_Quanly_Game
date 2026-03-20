export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-200 font-bold text-xl text-indigo-600">
        🛍️ POS System
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <a href="#" className="block px-4 py-3 bg-indigo-50 text-indigo-700 rounded-lg font-medium">
          📊 Tổng quan
        </a>
        <a href="#" className="block px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-indigo-600 rounded-lg font-medium transition-colors">
          📦 Đơn hàng
        </a>
        <a href="#" className="block px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-indigo-600 rounded-lg font-medium transition-colors">
          🏷️ Sản phẩm
        </a>
        <a href="#" className="block px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-indigo-600 rounded-lg font-medium transition-colors">
          ⚙️ Cài đặt
        </a>
      </nav>
    </aside>
  );
}