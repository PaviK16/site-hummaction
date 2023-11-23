import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__header app__wrapper section__padding" id="about">

    <div className="app__wrapper_img app__aboutus-img">
      <img src={images.cuisine} alt="" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="app__h1">Présentation de l'association</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>HummAction a été fondée en octobre 2017 par un groupe de bénévoles déterminés, initialement mobilisés via les réseaux sociaux, sous la présidence de M. Zenati. Chaque semaine, l'association réalise entre 300 et 1000 repas lors de maraudes, débutant par des sandwichs et évoluant vers des plats chauds. Mobilisant divers bénévoles, y compris des adolescents et des personnes handicapées, HummAction utilise tous les dons, alimentaires ou financiers, pour préparer les maraudes. Au Blanc-Mesnil, où l'association est désormais enracinée, elle poursuit son engagement en fournissant des repas aux personnes dans le besoin. HummAction élargit progressivement ses actions avec des distributions de colis et prévoit d'introduire davantage d'aides et d'activités pour renforcer son impact communautaire positif.</p>
    </div>

  </div>
);

export default AboutUs;
