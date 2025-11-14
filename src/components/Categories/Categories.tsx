import "./Categories.scss";
import categoriesData from "../../data/categories.json";

interface Category {
  id: number;
  name: string;
}

const Categories: React.FC = () => {
  const categories: Category[] = categoriesData as Category[];
  return (
    <section>
      <div className="container-h2">
        <h2 className="section-h2">Categories</h2>
      </div>

      <div className="categories-container">
        {categories.map((categories) => (
          <button key={categories.id} className="btn-category">
            {categories.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
