import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header>
      <div className="header-arrowB">
        <MdArrowBackIosNew className="arrow-icon" />
      </div>

      <div className="header-poster">
        <h3>Advertising/promotion/poster.</h3>
      </div>

      <div className="header-arrowF">
        <MdArrowForwardIos className="arrow-icon" />
      </div>
    </header>
  );
};

export default Header;
