import { products } from "../config/Config";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  return (
    <div className="w-ful px-4 py-5">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
