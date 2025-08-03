"use client";

import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart!`);
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg flex flex-col">
      <div className="relative w-full h-48 mb-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://placehold.co/600x400/EEE/31343C?text=Image+Not+Found';
          }}
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">₱{product.price.toLocaleString()}</p>
      </div>
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors mt-auto"
      >
        Add to Cart
      </button>
    </div>
  );
}
