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

const NavBar: React.FC = () => {
  const searchTerm = useSelector(
    (state: RootState) => state.searchFilter.searchByProducts
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleSearchProducts = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm.trim() === "") return;

    dispatch(clearActiveCategory());
    dispatch(setSearchFilter(searchTerm));
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
          value={searchTerm}
          onChange={(e) => dispatch(setSearchFilter(e.target.value))}
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
