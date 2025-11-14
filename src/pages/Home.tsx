import Categories from "../components/Categories/Categories";
import Layout from "../components/Layout/Layout";
import ProductGrid from "../components/ProductGrid/ProductGrid";

const Home: React.FC = () => {
  return (
    <Layout>
      <ProductGrid />
      <Categories />
    </Layout>
  );
};

export default Home;
