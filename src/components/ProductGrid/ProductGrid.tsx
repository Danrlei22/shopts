import "./ProductGrid.scss";
import type { Product } from "../../types/Product";

import productsData from "../../data/products.json";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { setPage } from "../../store/slices/paginationSlice";
import { useRef } from "react";

const ProductGrid: React.FC = () => {
  const products: Product[] = productsData as Product[];

  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage
  );
  const productsPerPage = useSelector(
    (state: RootState) => state.pagination.productsPerPage
  );
  const dispatch = useDispatch<AppDispatch>();

  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const gridRef = useRef<HTMLDivElement>(null);

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber: number) => {
    dispatch(setPage(pageNumber));
    if (gridRef.current) {
      window.scrollTo({ top: gridRef.current.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section className="section-container" ref={gridRef}>
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
