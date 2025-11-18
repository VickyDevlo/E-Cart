import { products } from "../config/Config";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 items-center py-4 max-md:px-2 md:py-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
