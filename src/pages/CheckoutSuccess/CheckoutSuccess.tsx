import Simplelayout from "../../components/Layout/SimpleLayout";
import "./CheckoutSuccess.scss";

const CheckoutSuccess: React.FC = () => {
  const orderNumber = Math.floor(Math.random() * 100000);
  return (
    <Simplelayout>
      <section className="checkout-success">
        <h1>Purchase completed successfully</h1>
        <p className="order-number">Order number: #{orderNumber}</p>
        <div className="checkout-detail">
          <p className="checkout-title">Items purchased:</p>

          <div className="checkout-header">
            <span>ITEM</span>
            <span>QTS</span>
            <span>PRICE</span>
          </div>

          <ul className="checkout-list">
            <li>
              <span>Item </span>
              <span>Qts </span>
              <span>Price </span>
            </li>

            <li>
              <span>Item </span>
              <span>Qts </span>
              <span>Price </span>
            </li>
          </ul>

          <p className="checkout-total">Total: </p>
        </div>
      </section>
    </Simplelayout>
  );
};

export default CheckoutSuccess;
