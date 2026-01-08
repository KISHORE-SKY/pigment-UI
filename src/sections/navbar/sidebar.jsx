import {Link} from "react-router-dom"

function SideBar() {
   
    return(
        <>
            <aside className="asideNavbar">
                <div className="sideBarLogo">
                    <h2>Style Tools</h2>
                </div>
                <ul className="sideBarLists">
                    <li><Link to="/color" className="sideNavLists">Color Picker</Link></li>
                    <li><Link to="/button"  className="sideNavLists">Button</Link></li>
                    <li><Link to="/linearGradient" className="sideNavLists">Linear-Gradient</Link></li>
                    <li><Link to="/radiel" className="sideNavLists">Radial-Gradient</Link></li>
                    <li><Link to="/glassbg" className="sideNavLists">Glass-Morphism</Link></li>
                    <li><Link to="/boxShadow" className="sideNavLists">Box-Shadow</Link></li>
                    <li><Link to="/formui" className="sideNavLists">Forms</Link></li>
                </ul>
            </aside>
        </>
    );
}


export default SideBar;