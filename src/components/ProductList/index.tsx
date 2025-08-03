import { Product } from "@/types";
import ProductCard from "../ProductCard";

async function getProducts() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/products`, { cache: 'no-cache' });
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    const products: Product[] = await res.json();
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function ProductList() {
  const products = await getProducts();

  if (products.length === 0) {
    return <p>No products found. Try adding some via the API!</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* We map over the products and render a ProductCard for each one. */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
