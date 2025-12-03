import { FaMagnifyingGlass } from "react-icons/fa6";
import "./NavBar.scss";
import { BsCart } from "react-icons/bs";
import marcaTS from "../../assets/marcaTS.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { setSearchFilter } from "../../store/slices/searchFilter";
import { setPage } from "../../store/slices/paginationSlice";
import { clearActiveCategory } from "../../store/slices/activeCategoryId";
import { useState } from "react";

const NavBar: React.FC = () => {
  const searchTerm = useSelector(
    (state: RootState) => state.searchFilter.searchByProducts
  );
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [showCart, setShowCart] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleSearchProducts = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm.trim() === "") return;

    dispatch(clearActiveCategory());
    dispatch(setSearchFilter(searchTerm));
    dispatch(setPage(1));
  };

  const toggleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <nav className="nav-bar">
      <div>
        <Link to="/">
          <img src={marcaTS} alt="Marca ShopTS" />
        </Link>
      </div>
      <form className="search-form" onSubmit={handleSearchProducts}>
        <input
          type="text"
          placeholder="Search"
          name="search"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchFilter(e.target.value))}
        />
        <button type="submit" className="search-button">
          <FaMagnifyingGlass className="search-icon" />
        </button>
      </form>
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
              <div className="cart-items">
                <h2 className="cart-title">Shopping cart</h2>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id}>
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
                          <p>Total: </p>
                          <p className="item-total-price">PREÇO TOTAL</p>
                        </div>
                        <div className="container-cart-quantity">
                          <div className="item-quantity">{item.quantity}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
