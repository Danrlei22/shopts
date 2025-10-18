import type { ReactNode } from "react";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-wrapper">
      <NavBar />
      <Header />

      <main className="main-content">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
