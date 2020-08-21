import { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar.component";
import theme from "./../theme";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

const PublicLayout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />

      <div className='site-navbar'>
        <Navbar />
      </div>
      <div className='body-part'>{props.children}</div>
      <div className='footer'></div>
    </ThemeProvider>
  );
};
export default PublicLayout;
