import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "./Header.scss";
import bannerWelcome from "../../assets/images/Offer1.png";
import bannerDelivery from "../../assets/images/Offer2.png";
import bannerKitchen from "../../assets/images/Offer3.png";
import bannerSmartwatch from "../../assets/images/Offer4.png";
import bannerFone from "../../assets/images/Offer5.png";
import { useState } from "react";

const banners = [
  {
    id: 1,
    src: bannerWelcome,
    alt: "Welcome ShopTS",
  },
  {
    id: 2,
    src: bannerDelivery,
    alt: "Free Delivery",
  },
  {
    id: 3,
    src: bannerKitchen,
    alt: "Kitchen Appliances",
  },
  {
    id: 4,
    src: bannerSmartwatch,
    alt: "Smatwatch Deals",
  },
  {
    id: 5,
    src: bannerFone,
    alt: "Smartphone offers",
  },
];

const Header: React.FC = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  return (
    <header>
      <div className="header-arrowB">
        <button
          className="btn-arrow"
          onClick={() => {
            const newCurrent = (currentBannerIndex + 1) % banners.length;
            setCurrentBannerIndex(newCurrent);
          }}
        >
          <MdArrowBackIosNew className="arrow-icon" />
        </button>
      </div>

      <div className="header-poster">
        <img src={banners[currentBannerIndex].src} />
      </div>

      <div className="header-arrowF">
        <button
          className="btn-arrow"
          onClick={() => {
            const newCurrent =
              (currentBannerIndex - 1 + banners.length) % banners.length;
            setCurrentBannerIndex(newCurrent);
          }}
        >
          <MdArrowForwardIos className="arrow-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
