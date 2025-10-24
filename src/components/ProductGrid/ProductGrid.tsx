import "./ProductGrid.scss";
import type { Product } from "../../types/Product";

import productsData from "../../data/products.json";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";

const ProductGrid: React.FC = () => {
  const products: Product[] = productsData as Product[];
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="section-container">
      <h2>Offers of the day</h2>

      <div className="container">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="container-pagination">
        {totalPages > 1 &&
          [...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                className={`btn-page ${
                  pageNumber === currentPage ? "active" : ""
                }`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          })}
      </div>
    </section>
  );
};

export default ProductGrid;
