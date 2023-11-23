import React from 'react';

import { images } from '../../constants';
import './Partenaires.css';

const Partenaires = () => (
  <div className="app__header app__wrapper section__padding" id="partenaires">
    <div className="app__wrapper_info">
      <h1 className="app__h1" style={{ margin: '2rem 0' }}>Partenaires</h1>

      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        HummAction est fière de collaborer avec des partenaires engagés qui renforcent notre impact humanitaire. Notre association a établi des partenariats significatifs avec des acteurs clés tels que le restaurant{' '}
        <a href="https://hoba.paris/" rel="noopener noreferrer" target="_blank" className="partner-link">Hoba</a>,
        où nous organisons des séances mensuelles de cuisine pour nos distributions alimentaires.
      </p>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        <a href="https://allomouton.com/" rel="noopener noreferrer" target="_blank" className="partner-link">Allo Mouton</a> contribue régulièrement en nous envoyant des dons de viande de mouton, et grâce à notre partenariat avec <a href="https://www.aldi.fr/" rel="noopener noreferrer" target="_blank" className="partner-link">Aldi</a>, nous avons la possibilité d'organiser des collectes alimentaires dans leurs magasins. Ces collaborations stratégiques nous permettent d'étendre notre portée et d'amplifier notre action humanitaire.
      </p>
    </div>

    <div className="app__wrapper_imgs">
      <img src={images.mouton} style={{ height: '500px' }} alt="Repas" />
    </div>
  </div>
);

export default Partenaires;
