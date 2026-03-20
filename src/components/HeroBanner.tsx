export default function HeroBanner() {
  return (
    <div className="bg-indigo-100 rounded-2xl p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center justify-between shadow-sm">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Bộ sưu tập <br /> <span className="text-indigo-600">Mùa Hè 2026</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Khám phá những xu hướng thời trang mới nhất với ưu đãi lên đến 50%. Miễn phí vận chuyển toàn quốc!
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition shadow-md hover:shadow-lg active:scale-95">
          Mua sắm ngay
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="w-64 h-64 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-500 text-6xl shadow-inner">
          👕👗
        </div>
      </div>
    </div>
  );
}