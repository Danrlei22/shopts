import "./ProductCard.scss";
import type { Product } from "../../types/Product";
import { BsCart } from "react-icons/bs";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { addItem } from "../../store/slices/cartSlice";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddProductToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-card">
      <img
        src={product.imageURL}
        alt={`Description: ${product.description}`}
        className="product-img"
      />
      <div className="product-name">
        <h3 className="name">{product.name}</h3>
      </div>
      <p className="product-price">
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <div className="product-btn">
        <button className="btn-buy">Buy</button>
        <button className="btn-cart" type="button" onClick={handleAddProductToCart}>
          Add <BsCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
