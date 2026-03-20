import HeroBanner from '@/components/HeroBanner';
import CategoryList from '@/components/CategoryList';
import ProductList from '@/components/ProductList';

export default function EcommerceHome() {
  return (
    <main className="w-full px-4 md:px-8 lg:px-12 py-8">
      <HeroBanner />
      <CategoryList />
      <ProductList />
    </main>
  );
}