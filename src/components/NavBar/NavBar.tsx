import { FaMagnifyingGlass } from "react-icons/fa6";
import "./NavBar.scss";
import { BsCart } from "react-icons/bs";
import marcaTS from "../../assets/marcaTS.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { setSearchFilter } from "../../store/slices/searchFilter";
import { setPage } from "../../store/slices/paginationSlice";
import { clearActiveCategory } from "../../store/slices/activeCategoryId";

const NavBar: React.FC = () => {
  const [searchByProducts, setSearchByProducts] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const handleSearchProducts = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchByProducts.trim() === "") return;

    dispatch(clearActiveCategory());
    dispatch(setSearchFilter(searchByProducts));
    dispatch(setPage(1));
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
          value={searchByProducts}
          onChange={(e) => setSearchByProducts(e.target.value)}
        />
        <button type="submit" className="search-button">
          <FaMagnifyingGlass className="search-icon" />
        </button>
      </form>
      <div>
        <button type="button" className="cart-button">
          <BsCart className="cart-icon" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
