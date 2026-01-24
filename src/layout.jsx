import { Outlet } from "react-router-dom";
import Navbar from "./sections/navbar/navbarSection";
import FooterSection from "./sections/footer/contact";
import { useEffect, useState } from "react";
import { useTheme } from "./themeContent";

function Layout() {
  const {isDarkMode}=useTheme();

  
  return ( //navbar and footer is always visible ,outlet is component to recieve the request component appear
    <>
      <div className={isDarkMode ? "dark-theme-wrapper" : "light-theme-wrapper"}>
        <Navbar />
        <Outlet />
        <FooterSection />
      </div>
      
    </>
  );
}

export default Layout;
