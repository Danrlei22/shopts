import { useLocation, useParams } from "react-router-dom";
import Simplelayout from "../Layout/SimpleLayout";
import "./ProductDetail.scss";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const ProductDetail: React.FC = () => {
  const location = useLocation();
  const productFromState = location.state?.product;

  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const products = useSelector((state: RootState) => state.products.items);

  const product = productFromState ?? products.find((p) => p.id === productId);

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
