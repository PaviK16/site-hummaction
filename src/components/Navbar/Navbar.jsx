import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from "react-icons/io";


import images from '../../constants/images'
import './Navbar.css'


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
    <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.hummaction} alt="app logo" />
        </div>
        <ul className="app__navbar-links">
          <li className="p__navbar"><a href="#home">Accueil</a></li>
          <li className="p__navbar"><a href="#about">Présentation</a></li>
          <li className="p__navbar"><a href="#projets">Projets</a></li>
          <li className="p__navbar"><a href="#participation">Participation</a></li>
          <li className="p__navbar"><a href="#partenaires">Partenaires</a></li>
          <li className="p__navbar"><a href="#galerie">Galerie</a></li>
          <li className="p__navbar"><a href="#reseaux">Réseaux sociaux</a></li>
        </ul>

        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color="#0066b2" fontSize={27}  style={{ margin: '0 2rem', fontWeight: 'bolder' }} onClick={() => setToggleMenu(true)}/>

          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <IoMdClose color="#0066b2" /*fontSize={27}*/ style={{ fontSize: '40px' }} className="overlay__close" onClick={() => setToggleMenu(false)}/>
              <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans"><a href="#home" onClick={() => setToggleMenu(false)}>Accueil</a></li>
                <li className="p__opensans"><a href="#about" onClick={() => setToggleMenu(false)}>Présentation</a></li>
                <li className="p__opensans"><a href="#projets" onClick={() => setToggleMenu(false)}>Projets</a></li>
                <li className="p__opensans"><a href="#participation" onClick={() => setToggleMenu(false)}>Participation</a></li>
                <li className="p__opensans"><a href="#partenaires" onClick={() => setToggleMenu(false)}>Partenaires</a></li>
                <li className="p__opensans"><a href="#galerie" onClick={() => setToggleMenu(false)}>Galerie</a></li>
                <li className="p__opensans"><a href="#reseaux" onClick={() => setToggleMenu(false)}>Réseaux sociaux</a></li>
              </ul>
            </div>
            )}
        </div>
      </nav>
    )
  }

export default Navbar;
