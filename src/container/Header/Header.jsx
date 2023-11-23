import React from 'react';

import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__h1">Chaque repas, chaque vêtement, une étincelle d'espoir dans la vie des autres</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Nous sommes une association humanitaire dédiée à apporter un soutien essentiel aux plus démunis. À travers des repas nutritifs, des vêtements chauds, et un engagement continu envers l'éducation, nous travaillons chaque jour pour éclairer les vies et offrir un avenir meilleur. Ensemble, nous formons une communauté unie par la solidarité, prête à faire une différence significative dans le monde.</p>
    </div>

    <div className="app__wrapper_img">
      <img src={images.hummactionHeader} alt="" />
    </div>
  </div>
);

export default Header;
