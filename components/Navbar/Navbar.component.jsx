import TopBanner from "./Topbanner.component";
import NavbarTop from "./NavbarTop.component";
import CatagoryBar from "./CatagoryBar.component";
const Navbar = (props) => {
  return (
    <>
      <TopBanner />
      <NavbarTop />
      <CatagoryBar />
    </>
  );
};

export default Navbar;
