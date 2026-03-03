import { useLocation, useNavigate, useParams } from "react-router-dom";
import SimplesLayoutWithCart from "../Layout/SimpleLayoutWithCart";
import "./ProductDetail.scss";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { BsCart } from "react-icons/bs";
import { addItem } from "../../store/slices/cartSlice";
import { toast } from "react-toastify";
import { setPage } from "../../store/slices/paginationSlice";

const ProductDetail: React.FC = () => {
  const location = useLocation();
  const productFromState = location.state?.product;

  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const products = useSelector((state: RootState) => state.products.items);

  const product = productFromState ?? products.find((p) => p.id === productId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!product) {
    return (
      <SimplesLayoutWithCart>
        <h1>Product not found...</h1>
      </SimplesLayoutWithCart>
    );
  }

  const handleAddProductToCart = () => {
    dispatch(addItem(product));
    toast.success(`${product.name} added to cart!`);
  };

  const handleFinishedPurchase = () => {
    alert(
      "Cart finished! Thank you for your purchase. Redirecting to home page...",
    );
    dispatch(setPage(1));
    navigate("/");
  };

  return (
    <SimplesLayoutWithCart>
      <section className="container-product-detail">
        <div className="product-media">
          <img src={product.imageURL} alt={product.name} />
        </div>
        <div className="product-desc">
          <p className="desc-name">{product.name}</p>
          <div>
            <strong>Description:</strong>
            <p className="desc-description">{product.description}</p>
          </div>
        </div>
        <div className="product-values">
          <p className="desc-values">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <p>{product.quantity}</p>
          <div className="btn-values">
            <button className="btn-buy" onClick={handleFinishedPurchase}>
              Buy
            </button>
            <button
              className="btn-cart"
              type="button"
              onClick={handleAddProductToCart}
            >
              <BsCart /> Add cart
            </button>
          </div>
        </div>
      </section>
    </SimplesLayoutWithCart>
  );
};

export default ProductDetail;
