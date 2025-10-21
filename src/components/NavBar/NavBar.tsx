import { FaMagnifyingGlass } from "react-icons/fa6";
import "./NavBar.scss";
import { BsCart } from "react-icons/bs";
import marcaTS from "../../assets/marcaTS.png";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="nav-bar">
      <div>
        <Link to="/">
          <img src={marcaTS} alt="Marca ShopTS" />
        </Link>
      </div>
      <div className="search-form">
        <input type="text" placeholder="Search" name="search" />
        <button type="button" className="search-button">
          <FaMagnifyingGlass className="search-icon" />
        </button>
      </div>
      <div>
        <button type="button" className="cart-button">
          <BsCart className="cart-icon" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
