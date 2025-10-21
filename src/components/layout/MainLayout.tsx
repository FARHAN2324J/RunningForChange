// import { useScrollSmoother } from "../../hooks/useScrollSmoother";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  // useScrollSmoother();
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Navbar />
        <main aria-label="main page content">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
