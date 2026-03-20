export default function CategoryList() {
  const categories = [
    { name: 'Áo Thun', icon: '👕' },
    { name: 'Quần Jeans', icon: '👖' },
    { name: 'Giày Thể Thao', icon: '👟' },
    { name: 'Phụ Kiện', icon: '⌚' }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <span className="bg-indigo-600 w-2 h-6 rounded-full mr-3"></span>
        Danh mục nổi bật
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="bg-white py-6 rounded-xl shadow-sm text-center cursor-pointer hover:shadow-md hover:border-indigo-500 border border-transparent transition group">
            <div className="w-16 h-16 bg-gray-50 rounded-full mx-auto mb-3 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
              {category.icon}
            </div>
            <h3 className="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}