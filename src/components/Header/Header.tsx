import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "./Header.scss";
import bannerWelcome from "../../assets/images/Offer1.png";
import bannerDelivery from "../../assets/images/Offer2.png";
import bannerKitchen from "../../assets/images/Offer3.png";
import bannerSmartwatch from "../../assets/images/Offer4.png";
import bannerFone from "../../assets/images/Offer5.png";
import { useEffect, useRef, useState } from "react";

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
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    timerRef.current = startAutoplay(5000);
    return () => {
      clearAutoplay();
    };
  }, []);

  const startAutoplay = (interval: number): number | undefined => {
    const timerId = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, interval);

    return timerId as number;
  };

  const clearAutoplay = () => {
    if (timerRef.current !== undefined) {
      clearInterval(timerRef.current);
      timerRef.current = undefined;
    }
  };

  const handleNextBanner = () => {
    const newCurrent = (currentBannerIndex + 1) % banners.length;
    setCurrentBannerIndex(newCurrent);
    clearAutoplay();
    timerRef.current = startAutoplay(5000);
  };

  const handlePrevBanner = () => {
    const newCurrent =
      (currentBannerIndex - 1 + banners.length) % banners.length;
    setCurrentBannerIndex(newCurrent);
    clearAutoplay();
    timerRef.current = startAutoplay(5000);
  };

  const handleDotClick = (index: number) => {
    setCurrentBannerIndex(index);

    clearAutoplay();
    timerRef.current = startAutoplay(5000);
  };

  return (
    <header>
      <div className="header-arrowB">
        <button className="btn-arrow" onClick={handlePrevBanner}>
          <MdArrowBackIosNew className="arrow-icon" />
        </button>
      </div>

      <div className="header-poster">
        <img src={banners[currentBannerIndex].src} />
        <div className="carousel-indicators">
          {banners.map((banner, index) => (
            <span
              key={banner.id}
              className={index === currentBannerIndex ? "active" : ""}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="header-arrowF">
        <button className="btn-arrow" onClick={handleNextBanner}>
          <MdArrowForwardIos className="arrow-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
