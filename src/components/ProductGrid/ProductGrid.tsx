import "./ProductGrid.scss";
import type { Product } from "../../types/Product";
import categoriasData from "../../data/categories.json";
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
  const searchTerm = useSelector(
    (state: RootState) => state.searchFilter.searchByProducts
  );

  const dispatch = useDispatch<AppDispatch>();

  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  let filteredProducts = products;

  if (lowerCaseSearchTerm !== "") {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  } else if (activeCategoryId) {
    filteredProducts = products.filter(
      (product) => product.categoryId === activeCategoryId
    );
  }

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const gridRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (pageNumber: number) => {
    dispatch(setPage(pageNumber));
    if (gridRef.current) {
      window.scrollTo({ top: gridRef.current.offsetTop, behavior: "smooth" });
    }
  };

  const maxButtonsPagination = 3;
  const pageOffset = Math.floor(maxButtonsPagination / 2);
  let startPage = Math.max(1, currentPage - pageOffset);
  let endPage = startPage + maxButtonsPagination - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, totalPages - maxButtonsPagination + 1);
  }

  const pageNumbersToShow: number[] = [];

  for (let x = startPage; x <= endPage; x++) {
    pageNumbersToShow.push(x);
  }

  const activeCategoryObject = categoriasData.find(
    (cat) => cat.id === activeCategoryId
  );

  let noProductsMessage = "";

  if (searchTerm.trim() !== "") {
    noProductsMessage = `No products found matching "${searchTerm}".`;
  } else if (activeCategoryId && activeCategoryObject) {
    noProductsMessage = `We don't have any products in this category yet, ${activeCategoryObject.name}.`;
  } else {
    noProductsMessage = "No products available.";
  }

  return (
    <section className="section-container" ref={gridRef}>
      <h2>Offers of the day</h2>

      <div className="container">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h3
            className="h3-noProduct"
            key={activeCategoryId || activeCategoryId || "no-category"}
          >
            {noProductsMessage}
          </h3>
        )}
      </div>

      {totalPages > 1 && (
        <div className="container-pagination">
          {currentPage > 1 && (
            <button
              className="btn-page btn-prev"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <MdKeyboardDoubleArrowLeft />
            </button>
          )}

          {startPage > 1 && <span className="pagination-ellipis">...</span>}

          {pageNumbersToShow.map((pageNumber) => {
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

          {endPage < totalPages && (
            <span className="pagination-ellipis">...</span>
          )}

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
