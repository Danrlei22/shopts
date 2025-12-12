import { useLocation } from "react-router-dom";
import Simplelayout from "../Layout/SimpleLayout";
import "./ProductDetail.scss";

const ProductDetail: React.FC = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return (
      <Simplelayout>
        <h1>Product not found...</h1>
      </Simplelayout>
    );
  }

  return (
    <Simplelayout>
      <section className="container-product-detail">
        <div className="product-midea">
          <img src={product.imageURL} alt={product.name} />
        </div>
        <div className="product-details">
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      </section>
    </Simplelayout>
  );
};

export default ProductDetail;
