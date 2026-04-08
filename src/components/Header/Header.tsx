import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "./Header.scss";
import bannerWelcome from "../../assets/images/Offer1.png";
import bannerDelivery from "../../assets/images/Offer2.png";
import bannerKitchen from "../../assets/images/Offer3.png";
import bannerSmartwatch from "../../assets/images/Offer4.png";
import bannerFone from "../../assets/images/Offer5.png";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { setActiveCategory } from "../../store/slices/activeCategoryId";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const timerRef = useRef<number | undefined>(undefined);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const scrollToGrid = () => {
    const gridElement = document.getElementById("gridContainer");
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const banners = [
    {
      id: 1,
      src: bannerWelcome,
      alt: "Welcome ShopTS",
      categoryId: null,
      productId: null,
    },
    {
      id: 2,
      src: bannerDelivery,
      alt: "Free Delivery",
      categoryId: null,
      productId: null,
    },
    {
      id: 3,
      src: bannerKitchen,
      alt: "Kitchen Appliances",
      categoryId: 7,
      productId: null,
    },
    {
      id: 4,
      src: bannerSmartwatch,
      alt: "Smatwatch Deals",
      categoryId: null,
      productId: 7,
    },
    {
      id: 5,
      src: bannerFone,
      alt: "Smartphone offers",
      categoryId: null,
      productId: 3,
    },
  ];

  const startAutoplay = useCallback(() => {
    const timerId = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return timerId as number;
  }, [banners.length]);

  const clearAutoplay = useCallback(() => {
    if (timerRef.current !== undefined) {
      clearInterval(timerRef.current);
      timerRef.current = undefined;
    }
  }, []);

  useEffect(() => {
    timerRef.current = startAutoplay();
    return () => {
      clearAutoplay();
    };
  }, [startAutoplay, clearAutoplay]);

  const handleNextBanner = () => {
    const newCurrent = (currentBannerIndex + 1) % banners.length;
    setCurrentBannerIndex(newCurrent);
    clearAutoplay();
    timerRef.current = startAutoplay();
  };

  const handlePrevBanner = () => {
    const newCurrent =
      (currentBannerIndex - 1 + banners.length) % banners.length;
    setCurrentBannerIndex(newCurrent);
    clearAutoplay();
    timerRef.current = startAutoplay();
  };

  const handleDotClick = (index: number) => {
    setCurrentBannerIndex(index);

    clearAutoplay();
    timerRef.current = startAutoplay();
  };

  return (
    <header>
      <div className="header-arrowB">
        <button className="btn-arrow" onClick={handlePrevBanner}>
          <MdArrowBackIosNew className="arrow-icon" />
        </button>
      </div>

      <div className="header-poster">
        <span
          onClick={() => {
            if (banners[currentBannerIndex].categoryId !== null)
              dispatch(
                setActiveCategory(banners[currentBannerIndex].categoryId),
              );
            if (banners[currentBannerIndex].productId !== null) {
              navigate(`product/${banners[currentBannerIndex].productId}`);
            }
            scrollToGrid();
          }}
          style={
            banners[currentBannerIndex].categoryId !== null ||
            banners[currentBannerIndex].productId !== null
              ? { cursor: "pointer" }
              : {}
          }
        >
          <img
            src={banners[currentBannerIndex].src}
            alt={banners[currentBannerIndex].alt}
          />
        </span>

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
