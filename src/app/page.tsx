import ProductList from "@/components/ProductList";
import { Product } from "@/types"

async function getProducts() {
  try {
    const res = await fetch('http://localhost:5201/api/products', { cache: 'no-cache' });
    if (!res.ok) {
      throw new Error('Failed to fetch products.');
    }

    const products: Product[] = await res.json();
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      {/* The homepage is now clean and just renders the list component. */}
      <ProductList />
    </main>
  );
}
