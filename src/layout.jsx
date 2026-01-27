import { Outlet } from "react-router-dom";
import Navbar from "./sections/navbar/navbarSection";
import FooterSection from "./sections/footer/contact";
import { useEffect, useState } from "react";
import { useTheme } from "./themeContent";
import PreloadComponent from "./assets/components/preloder/preload.jsx";


function Layout() {
  const {isDarkMode}=useTheme();
  const [loading,setLoading]=useState('yesLoading');
    
   function loadHandler(){
      setLoading('noLoading');
    }
    useEffect(()=>{
      if(document.readyState === 'complete'){
        loadHandler();
      }
      else{
        window.addEventListener('load',loadHandler)
      }
      return ()=>window.removeEventListener('load', loadHandler)
    },[])

  
  return ( //navbar and footer is always visible ,outlet is component to recieve the request component appear
    <>
      <div className={isDarkMode ? "dark-theme-wrapper" : "light-theme-wrapper"}>
        {loading === 'yesLoading' ? (<PreloadComponent />) :
    
        (<>
        <Navbar />
        <Outlet />
        <FooterSection />
        </>)}
        
      </div>
    </>
  );
}

export default Layout;
