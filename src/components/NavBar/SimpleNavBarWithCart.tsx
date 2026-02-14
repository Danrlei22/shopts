import { Link, useNavigate } from "react-router-dom";
import marcaTS from "../../assets/marcaTS.png";
import { IoArrowUndoOutline } from "react-icons/io5";
import "./SimpleNavBarWithCart.scss";
import Cart from "../Cart/Cart";

const SimpleNavBarWithCart: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="simple-navbar-cart">
      <button className="btn-back" type="button" onClick={() => navigate(-1)}>
        <IoArrowUndoOutline className="simple-navbar-icon" />
      </button>
      <Link to="/">
        <img src={marcaTS} alt="Marca ShoTS" />
      </Link>
      <Cart />
    </nav>
  );
};

export default SimpleNavBarWithCart;
