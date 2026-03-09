import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
      <div className='Footer-content'>
       <div className='Footer-content-left'>
       <img src={assets.logo} alt='' />
       <p>Experience seamless online ordering only on the Tomato app.</p> 
       <div className='Footer-social-icon'>
         <img src={assets.facebook_icon} alt='' />
         <img src={assets.twitter_icon} alt='' />
         <img src={assets.linkedin_icon} alt='' />
       </div>
       </div>
       <div className='Footer-content-center'>
        <h2>COMPANY</h2> 
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
            </ul>
       </div>
       <div className='Footer-content-right'>
        <h2>GET IN TOUCH</h2>
        <li>+1-212-456-7890</li>
        <li>contact@tomato.com</li> 
       </div>
      </div>
      <hr/>
      <p className='Footer-copyright'>Copyright 2026 @ Tomato.com - All Right Reserved.</p> 
    </div>
  )
}

export default Footer;
