import type { ReactNode } from "react";
import "./Layout.scss";
import Footer from "../Footer/Footer";
import SimpleNavBar from "../NavBar/SimpleNavBar";

interface SimplelayoutProps {
  children: ReactNode;
}

const Simplelayout: React.FC<SimplelayoutProps> = ({ children }) => {
  return (
    <div className="app-wrapper">
      <SimpleNavBar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Simplelayout;
