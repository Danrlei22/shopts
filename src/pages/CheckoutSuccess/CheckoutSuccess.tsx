import { useLocation } from "react-router-dom";
import Simplelayout from "../../components/Layout/SimpleLayout";
import "./CheckoutSuccess.scss";
import type { Product } from "../../types/Product";

const CheckoutSuccess: React.FC = () => {
  const orderNumber = Math.floor(Math.random() * 100000);
  const location = useLocation();
  const items: Product[] = location.state?.items || [];
  const date = new Date().toLocaleDateString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Simplelayout>
      <section className="checkout-success">
        <h1>Purchase completed successfully</h1>
        <div className="checkout-info">
          <p className="order-number">Order number: #{orderNumber}</p>
          <p className="checkout-date">{date}</p>
        </div>

        <div className="checkout-detail">
          <p className="checkout-title">Items purchased:</p>
          <div className="checkout-header">
            <span>ITEM</span>
            <span>NAME</span>
            <span>PRICE</span>
          </div>
          {items.length === 0 && <p>No items to display</p>}
          {items.length === 1 && (
            <ul className="checkout-list">
              {items.map((item) => (
                <li key={item.id}>
                  <img src={item.imageURL} className="item-product-img" />
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
          )}
          {items.length > 1 && (
            <>
              <ul className="checkout-list">
                {items.map((item) => (
                  <li key={item.id}>
                    <img src={item.imageURL} className="item-product-img" />
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

              <p className="checkout-total">
                Total:{" "}
                {items
                  .reduce((sum, items) => sum + items.price, 0)
                  .toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
              </p>
            </>
          )}
        </div>
      </section>
    </Simplelayout>
  );
};

export default CheckoutSuccess;
