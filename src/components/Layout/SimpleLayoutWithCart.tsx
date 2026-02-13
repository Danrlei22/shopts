import Footer from "../Footer/Footer";
import SimpleNavBarWithCart from "../NavBar/SimpleNavBarWithCart";

interface SimpleLayoutWithCartProps {
  children: React.ReactNode;
}

const SimplesLayoutWithCart: React.FC<SimpleLayoutWithCartProps> = ({
  children,
}) => {
  return (
    <div className="app-wrapper">
      <SimpleNavBarWithCart />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default SimplesLayoutWithCart;
