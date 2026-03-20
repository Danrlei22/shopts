import "./ProductCard.scss";
import type { Product } from "../../types/Product";
import { BsCart } from "react-icons/bs";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { addItem } from "../../store/slices/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleAddProductToCart = () => {
    dispatch(addItem(product));
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="product-card">
      <Link
        to={`/product/${product.id}`}
        state={{ product }} //state product for to productDetail
        className="link-product"
      >
        <img
          src={product.imageURL}
          alt={`Description: ${product.description}`}
          className="product-img"
        />
        <div className="product-name">
          <h3 className="name">{product.name}</h3>
        </div>
      </Link>
      <p className="product-price">
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <div className="product-btn">
        <button
          className="btn-buy"
          onClick={() =>
            navigate("/checkout-success", {
              state: {
                items: [product],
              },
            })
          }
        >
          Buy
        </button>
        <button
          className="btn-cart"
          type="button"
          onClick={handleAddProductToCart}
        >
          Add <BsCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
