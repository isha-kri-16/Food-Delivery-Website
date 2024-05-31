import './Navbar.css';
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

function Navbar({setShowLogin}) {    //destructure from app.jsx

    const [menu, setMenu] = useState("home")

    const {getTotalCartAmount} = useContext(StoreContext);

    return(
        <>
        <div className="navbar">
            {/* whenever we click on logo icon home page will open */}
            <Link to='/'>  <img src={assets.logo} alt=""  className='logo'/>   </Link>

            <ul className='navbar-menu'>
                <Link to='/'    onClick={() => setMenu("home")}      className={ menu==="home" ? "active"  : "" } >home </Link>
                <a href='#explore-menu'    onClick={() => setMenu("menu")}      className={ menu==="menu" ? "active"  : "" } >menu </a>
                <a href='#app-download'    onClick={() => setMenu("mobile-app")}    className={ menu==="mobile-app" ? "active"  : "" } >mobile-app </a>
                <a href='#footer'    onClick={() => setMenu("contact-us")}    className={ menu==="contact-us" ? "active"  : "" } >contact us </a>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />

                <div className="navbar-search-icon">
                    {/* whenever we click on basket icon CART page with details open.. */}
                    <Link  to='/cart'>   <img src={assets.basket_icon} alt="" />   </Link>  
                    <div className={getTotalCartAmount() === 0 ? "" : "dot" }> </div>
                </div>

                <button onClick={() => setShowLogin(true)}   >SignIn</button>

            </div>
        </div>
        </>
    )
}


export default Navbar;