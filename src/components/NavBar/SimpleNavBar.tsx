import { Link, useNavigate } from "react-router-dom";
import marcaTS from "../../assets/marcaTS.png";
import "./SimpleNavBar.scss";
import { IoArrowUndoOutline } from "react-icons/io5";

const SimpleNavBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="simple-navbar">
      <button className="btn-back" type="button" onClick={() => navigate(-1)}>
        <IoArrowUndoOutline className="simple-navbar-icon" />
      </button>
      <Link to="/">
        <img src={marcaTS} alt="Marca ShopTS" />
      </Link>
      <div className="placeholder-right"></div>
    </nav>
  );
};

export default SimpleNavBar;
