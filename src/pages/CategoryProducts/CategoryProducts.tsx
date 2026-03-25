import type { Product } from "../../types/Product";
import productsData from "../../data/products.json";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

const CategoryProducts: React.FC = () => {
  const products: Product[] = productsData as Product[];

  const { id } = useParams<{ id: string }>();
  const categoryId = Number(id);
  const categoryProducts = products.filter(
    (product) => product.categoryId === categoryId,
  );

  return (
    <>
      <h1>Category Products</h1>
      {categoryProducts.length > 0 ? (
        categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found in this category.</p>
      )}
    </>
  );
};

export default CategoryProducts;
