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
      <div>
        <button type="button" className="cart-button" onClick={toggleCartClick}>
          <BsCart className="cart-icon" />
          {cartItems.length > 0 && (
            <span className="cart-quantity">{cartItems.length}</span>
          )}
          {showCart && (
            <div className="cart-dropdown">
              {cartItems.length === 0 ? (
                <p className="cart-empty">Your cart is empty</p>
              ) : (
                <div className="cart-items">
                  <ul>
                    {cartItems.map((item) => (
                      <li key={item.id}>
                        {item.name} x {item.quantity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
