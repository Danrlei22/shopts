import "./ProductGrid.scss";
import type { Product } from "../../types/Product";

import productsData from "../../data/products.json";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { setPage } from "../../store/slices/paginationSlice";
import { useRef } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const ProductGrid: React.FC = () => {
  const products: Product[] = productsData as Product[];

  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage
  );
  const productsPerPage = useSelector(
    (state: RootState) => state.pagination.productsPerPage
  );
  const activeCategoryId = useSelector(
    (state: RootState) => state.activeCategory.activeCategoryId
  );

  const dispatch = useDispatch<AppDispatch>();

  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProductsByCategory = activeCategoryId
    ? products.filter((product) => product.categoryId === activeCategoryId)
    : products;

  const currentProducts = filteredProductsByCategory.slice(
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
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h3 className="h3-noProduct">
            We don't have a product in this category yet.
          </h3>
        )}
      </div>

      {filteredProductsByCategory.length > 0 && (
        <div className="container-pagination">
          {currentPage > 1 && (
            <button
              className="btn-page btn-prev"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <MdKeyboardDoubleArrowLeft />
            </button>
          )}
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
          {currentPage < totalPages && (
            <button
              className="btn-page btn-next"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <MdKeyboardDoubleArrowRight />
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
