import { products } from "../config/Config";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 items-center mt-4 max-md:p-2 md:mt-12">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
