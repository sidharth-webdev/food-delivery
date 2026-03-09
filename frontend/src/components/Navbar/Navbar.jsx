
import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("Home");
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const { 
    getTotalCartAmount, 
    token, 
    setToken,
    searchFood
  } = useContext(StoreContext);

  const navigate = useNavigate();

  // ✅ ADD THIS FUNCTION
  const scrollToSection = (id, menuName) => {
    setMenu(menuName);
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <>
      <div className='Navbar'>
        <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>

        {/* ✅ UPDATED NAVBAR MENU */}
        <ul className='navbar-menu'>
          <li 
            onClick={() => scrollToSection("home", "Home")} 
            className={menu === "Home" ? "active" : ""}>
            Home
          </li>

          <li 
            onClick={() => scrollToSection("explore-menu", "Menu")} 
            className={menu === "Menu" ? "active" : ""}>
            Menu
          </li>

          <li 
            onClick={() => scrollToSection("app-download", "Mobile-app")} 
            className={menu === "Mobile-app" ? "active" : ""}>
            Mobile-app
          </li>

          <li 
            onClick={() => scrollToSection("Footer", "Contact-us")} 
            className={menu === "Contact-us" ? "active" : ""}>
            Contact-us
          </li>
        </ul>

        <div className='navbar-right'>

          {/* 🔍 Search Icon */}
          <img 
            src={assets.search_icon} 
            alt='' 
            onClick={() => setShowSearch(!showSearch)} 
            style={{ cursor: "pointer" }}
          />

          <div className='navbar-search-icon'>
            <Link to='/cart'><img src={assets.basket_icon} alt='' /></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>

          {!token ? 
            <button onClick={() => setShowLogin(true)}>Sign In</button> :
            <div className='navbar-profile'>
              <img src={assets.profile_icon} alt='' />
              <ul className="nav-profile-dropdown">
                <li onClick={() => navigate('/myorders')}>
                  <img src={assets.bag_icon} alt='' />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <img src={assets.bag_icon} alt='' />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          }
        </div>
      </div>

      {/* 🔍 Search Input */}
      {showSearch && (
        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              searchFood(e.target.value);
            }}
            style={{
              width: "40%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />
        </div>
      )}
    </>
  )
} 

export default Navbar;     
