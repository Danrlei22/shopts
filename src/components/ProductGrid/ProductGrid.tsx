import "./ProductGrid.scss";
import type { Product } from "../../types/Product";

import productsData from "../../data/products.json";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid: React.FC = () => {
  const products: Product[] = productsData as Product[];

  return (
    <section className="section-container">
      <h2>Offers of the day</h2>

      <div className="container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
