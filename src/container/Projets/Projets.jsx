import React from 'react';

import images from '../../constants/images'
import './Projets.css';

const Projets = () => (
  <div className="app__header app__wrapper section__padding" id="projets">
    <div className="app__wrapper_info">
      <h1 className="app__h1" style={{margin: '2rem 0'}}>Projets de l'association</h1>
      <h3 className="app__h3">Distributions alimentaires</h3>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Chaque mois, HummAction organise une collecte alimentaire solidaire le samedi, rassemblant généreusement des dons de la communauté. Ces provisions servent à préparer des maraudes plusieurs dimanches par mois, permettant ainsi de distribuer des repas nourrissants à ceux qui en ont le plus besoin.</p>
      <h3 className="app__h3">Aide aux devoirs</h3>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Parallèlement, tous les dimanches, notre local ouvre ses portes pour offrir une aide aux devoirs gratuite accessible à tous les âges. Cette initiative vise à créer un impact significatif en répondant aux besoins alimentaires urgents tout en soutenant l'éducation et le bien-être des membres de notre communauté locale.</p>
    </div>

    <div className="app__wrapper_img" style={{flexDirection: 'column'}}>
      <img src={images.repas} alt="Repas" />
      <img src={images.maraudes} alt="Maraudes" />
    </div>
  </div>
);

export default Projets;
