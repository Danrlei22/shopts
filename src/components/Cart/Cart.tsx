import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { FaTrashCan } from "react-icons/fa6";
import { useState } from "react";
import { BsCart } from "react-icons/bs";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  updateItemQuantity,
  cleanCart,
  removeItem,
} from "../../store/slices/cartSlice";
import "./Cart.scss";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [showCart, setShowCart] = useState(false);
  const [showConfirmClear, setShowConfirmClear] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const toggleCartClick = () => {
    setShowCart(!showCart);
  };

  const handleMoreQuantity = (itemId: number) => {
    dispatch(increaseItemQuantity(itemId));
  };

  const handleLessQuantity = (itemId: number) => {
    dispatch(decreaseItemQuantity(itemId));
  };

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    if (isNaN(newQuantity) || newQuantity <= 0) return;
    dispatch(updateItemQuantity({ itemId, quantity: newQuantity }));
  };

  const handleCleanCart = () => {
    setShowConfirmClear(!showConfirmClear);
  };

  const confirmCleanCart = () => {
    dispatch(cleanCart());
    setShowConfirmClear(false);
  };

  const handleRemoveItem = (itemId: number) => {
    const itemToRemove = cartItems.find((item) => item.id === itemId);

    if (itemToRemove) {
      dispatch(removeItem(itemToRemove));
    }
  };

  return (
    <div className="cart-container">
      <button type="button" className="cart-button" onClick={toggleCartClick}>
        <BsCart className="cart-icon" />
        {cartItems.length > 0 && (
          <span className="cart-quantity">{cartItems.length}</span>
        )}
      </button>
      {showCart && (
        <div className="cart-dropdown">
          {cartItems.length === 0 ? (
            <p className="cart-empty">Your cart is empty</p>
          ) : (
            <>
              <div className="cart-items">
                <h2 className="cart-title">Shopping cart</h2>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      <span
                        className="item-remove"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <FaTrashCan />
                      </span>
                      <div className="container-cart-item">
                        <div className="item-image">
                          <img src={item.imageURL} alt="Image item" />
                        </div>
                        <div className="item-details">
                          <p className="item-name">{item.name}</p>
                          <p className="item-price">
                            {item.price.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </p>
                          <p>Total item:</p>
                          <p className="item-total-price">
                            {(item.price * item.quantity).toLocaleString(
                              "pt-BR",
                              {
                                style: "currency",
                                currency: "BRL",
                              }
                            )}
                          </p>
                        </div>
                        <div className="container-cart-quantity">
                          <p>Qts</p>
                          <span
                            className="item-more-quantity"
                            onClick={() => handleMoreQuantity(item.id)}
                          >
                            +
                          </span>
                          <input
                            type="number"
                            className="item-quantity"
                            value={item.quantity}
                            onChange={(event) =>
                              handleQuantityChange(
                                item.id,
                                Number(event.target.value)
                              )
                            }
                          />
                          <span
                            className="item-less-quantity"
                            onClick={() => handleLessQuantity(item.id)}
                          >
                            -
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="btn-clean-cart">
                  <span onClick={handleCleanCart}>Clear cart</span>
                </div>
                {showConfirmClear && (
                  <>
                    <div className="overlay-block"></div>
                    <div className="modal-confirm-clean">
                      <p className="modal-cofirm-text">
                        Are you want to clean cart?
                      </p>
                      <div className="confirm-actions">
                        <button
                          className="btn-confirm-clean"
                          onClick={confirmCleanCart}
                        >
                          Yes
                        </button>
                        <button
                          className="btn-cancel-clean"
                          onClick={() => setShowConfirmClear(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="cart-total-container">
                <p className="cart-total">
                  <strong>
                    Total:{" "}
                    {cartItems
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                      .toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                  </strong>
                </p>
                <p className="cart-total-items">
                  <strong>
                    Items:{" "}
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  </strong>
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
