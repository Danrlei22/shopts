import "./Categories.scss";
import categoriesData from "../../data/categories.json";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store";
import { setActiveCategory } from "../../store/slices/activeCategoryId";
import { useState } from "react";
import { setPage } from "../../store/slices/paginationSlice";

interface Category {
  id: number;
  name: string;
}

const Categories: React.FC = () => {
  const categories: Category[] = categoriesData as Category[];
  const activeCategoryId = useSelector(
    (state: RootState) => state.activeCategory.activeCategoryId
  );

  const dispatch = useDispatch<AppDispatch>();

  const [visibleCategories, setVisibleCategories] = useState(15);
  const categoriesToShow = categories.slice(0, visibleCategories);
  const initialVisible = 15;

  const handleCategoryClick = (categoryId: number) => {
    const currentActiveId = activeCategoryId;

    if (currentActiveId === categoryId) {
      dispatch(setActiveCategory(null));
      dispatch(setPage(1));
    } else {
      dispatch(setActiveCategory(categoryId));
    }
  };

  const handleLoadMore = () => {
    {
      setVisibleCategories((prevCount) => prevCount + 10);
    }
  };

  const handleLoadLess = () => {
    {
      setVisibleCategories(initialVisible);
    }
  };

  return (
    <section>
      <div className="container-h2">
        <h2 className="section-h2">Categories</h2>
      </div>

      <div className="categories-container">
        {categoriesToShow.map((category) => (
          <button
            key={category.id}
            className={`btn-category ${
              category.id === activeCategoryId ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="load">
        {categoriesToShow.length < categories.length && (
          <button className="btn-load" onClick={() => handleLoadMore()}>
            Load More
          </button>
        )}
        {visibleCategories >= categories.length &&
          categories.length > initialVisible && (
            <button className="btn-load" onClick={() => handleLoadLess()}>
              Load Less
            </button>
          )}
      </div>
    </section>
  );
};

export default Categories;
