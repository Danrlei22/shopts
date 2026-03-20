import { useLocation } from "react-router-dom";
import Simplelayout from "../../components/Layout/SimpleLayout";
import "./CheckoutSuccess.scss";
import type { Product } from "../../types/Product";

const CheckoutSuccess: React.FC = () => {
  const orderNumber = Math.floor(Math.random() * 100000);
  const location = useLocation();
  const items: Product[] = location.state?.items || [];
  return (
    <Simplelayout>
      <section className="checkout-success">
        <h1>Purchase completed successfully</h1>
        <p className="order-number">Order number: #{orderNumber}</p>
        <div className="checkout-detail">
          <p className="checkout-title">Items purchased:</p>

          <div className="checkout-header">
            <span>ITEM</span>
            <span>NAME</span>
            <span>PRICE</span>
          </div>

          <ul className="checkout-list">
            {items.map((item) => (
              <li key={item.id}>
                <img src={item.imageURL} className="item-product-img"/>
                <span>{item.name} </span>
                <span>
                  {item.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}{" "}
                </span>
              </li>
            ))}
          </ul>

          <p className="checkout-total">Total: </p>
        </div>
      </section>
    </Simplelayout>
  );
};

export default CheckoutSuccess;
