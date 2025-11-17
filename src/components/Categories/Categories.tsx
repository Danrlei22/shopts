import "./Categories.scss";
import categoriesData from "../../data/categories.json";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store";
import { setActiveCategory } from "../../store/slices/activeCategoryId";

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

  const handleCategoryClick = (categoryId: number) => {
    dispatch(setActiveCategory(categoryId));
  };

  return (
    <section>
      <div className="container-h2">
        <h2 className="section-h2">Categories</h2>
      </div>

      <div className="categories-container">
        {categories.map((category) => (
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
    </section>
  );
};

export default Categories;
