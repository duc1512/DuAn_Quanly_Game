export default function ProductList() {
  // Tạo mảng ảo 8 sản phẩm để hiển thị
  const products = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div>
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <span className="bg-indigo-600 w-2 h-6 rounded-full mr-3"></span>
          Sản phẩm bán chạy
        </h2>
        <a href="#" className="text-indigo-600 font-medium hover:underline text-sm">Xem tất cả &rarr;</a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-6">
        {products.map((item) => (
          <div key={item} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
            <div className="h-56 bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-gray-200 transition-colors relative overflow-hidden">
              <span className="group-hover:scale-110 transition-transform duration-500">Hình ảnh {item}</span>
              {item === 1 && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  Bán chạy
                </span>
              )}
            </div>
            
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Thương hiệu {item}</h3>
              <a href="#" className="font-medium text-gray-800 mb-2 line-clamp-2 hover:text-indigo-600 transition-colors flex-1">
                Tên sản phẩm thời trang mẫu số {item}
              </a>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                <span className="font-bold text-lg text-indigo-600">450.000₫</span>
                <button className="w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}