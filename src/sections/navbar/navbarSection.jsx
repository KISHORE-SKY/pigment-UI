import { useEffect, useRef, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import OutsideClickHandler from 'react-outside-click-handler';
import { useTheme } from "../../themeContent.jsx";


function Navbar() {

    const [openList,setOpenList]=useState(false);
    const [outsideClickHamberg,setOutsideClickHamberg]=useState(false);
    function onOutsideClick(){
        setOutsideClickHamberg(true);
    }

    const {isDarkMode,toggleTheme}=useTheme();
    
    const catogiriesMenu=useRef(null);

        useEffect(()=>{
            const catogiriesNavBar=(event)=>{
                if(catogiriesMenu.current && !catogiriesMenu.current.contains(event.target)){
                    setOpenList(false);
                }
            }
            document.addEventListener('mousedown',catogiriesNavBar);

            return ()=>{
                document.removeEventListener('mousedown',catogiriesNavBar);
            }
        },[])

    function CatogiriesHandler(event) {
        setOpenList(prev => !prev);
    }

    return(
        <>
            <header className="navbarSection">

                <div style={{paddingLeft:'20px'}}>
                    <h2 className="logo">Pigment UI</h2>
                </div>
                
                <section className="wholeLists">


                    <div style={{ position: 'relative' }} className="dropDown" ref={catogiriesMenu}>

                        <div className="dropDownBox" onClick={CatogiriesHandler}>

                            <p style={{color:'#0B0729'}}>Tools </p>

                            <FaChevronDown 
                            style={{transform: openList ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition:'all 0.2s ease',
                            }}/>
                        </div>

                        {openList && <ul className="toolsList">
                            <Link to='/color' className="linkDrop">Color Picker</Link>
                            <li><Link to="/button" className="linkDrop">Button</Link></li>
                            <li> <Link to="linearGradient" className="linkDrop">Linear-Gradient</Link></li>
                            <li><Link to="/radiel" className="linkDrop">Radial-Gradient</Link></li>
                            <li><Link to='glassbg' className="linkDrop">Glass-Morphism</Link></li>
                            <li><Link to="/boxShadow" className="linkDrop">Box-Shadow</Link></li>
                            <li><Link to="/formui" className="linkDrop">Forms</Link></li>
                        </ul>}
                    </div>

                
                    <nav className="landscapeNavlits">
                        <ul className="navLists">
                            <li><Link to='/' className="linkTag">Home</Link></li>
                            <li><Link to='/color' className="linkTag">Explore Tools</Link></li>  
                        </ul>
                        
                        <div style={{display:'flex',alignItems:'center',gap:'7px',width:'25px'}} onClick={toggleTheme} >
                            {isDarkMode ?<MdLightMode style={{fontSize:'20px',cursor:'pointer' }}/> :
                            <FaMoon style={{fontSize:'18px',cursor:'pointer'}}/>}
                        </div>
                    </nav>

                <OutsideClickHandler onOutsideClick={() => setOutsideClickHamberg(false)}>
                    <div className="menuIcon" >
                        <CgMenuRight style={{color:'#fff',fontSize:'20px'}} onClick={() => setOutsideClickHamberg(!outsideClickHamberg)}/>
                    </div>
                
                
                {outsideClickHamberg && (
                    <nav className="mobileNavMenu" >
                        <ul className="navListsPotrait">
                            <li><Link to='/' className="linkDrop">Home</Link></li>  
                            <li><Link to='/color' className="linkDrop">Color Picker</Link></li>
                            <li><Link to="/button"  className="linkDrop">Button</Link></li>
                            <li><Link to="/linearGradient" className="linkDrop">Linear-Gradient</Link></li>
                            <li><Link to="/radiel" className="linkDrop">Radiel-Gradient</Link></li>
                            <li><Link to='/glassbg' className="linkDrop">Glass-Morphism</Link></li>
                            <li><Link to="/boxShadow" className="linkDrop">Box-Shadow</Link></li>
                            <li><Link to="/formui" className="linkDrop">Forms</Link></li>
                        </ul>
                        
                        <div style={{display:'flex',alignItems:'center',gap:'7px'}} onClick={toggleTheme}>
                            {isDarkMode ? <MdLightMode style={{fontSize:'20px',cursor:'pointer'}}/> : 
                            <FaMoon style={{fontSize:'18px',cursor:'pointer'}}/>}
                        </div>
                    </nav>
                )}
                </OutsideClickHandler>
                
                </section>
            </header>
        </>
    );
}


export default Navbar;

