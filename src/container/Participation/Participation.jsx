import React from 'react';

import images from '../../constants/images'
import './Participation.css';

const Participation = () => (
  <div className="app__header app__wrapper section__padding" id="participation">

    <div className="app__wrapper_img app__aboutus-img">
      <img src={images.membres} alt="" />
    </div>
    <div className="app__wrapper_info">
      <h1 className="app__h1">Participation à nos activités</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Tout le monde est chaleureusement invité à rejoindre HummAction et à participer activement à nos initiatives solidaires. Que vous souhaitiez contribuer lors de nos collectes alimentaires, vous impliquer dans la préparation de maraudes, bénéficier de l'aide aux devoirs gratuite ou simplement apporter votre soutien, toutes les mains et les cœurs sont les bienvenus. Ensemble, nous formons une communauté engagée, unie par le désir commun de faire une différence positive dans la vie de ceux qui en ont le plus besoin. Rejoignez-nous et participez à notre mission de solidarité et d'entraide.</p>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Contribuez facilement à notre cause en faisant un don via PayPal. Votre générosité permettra de soutenir nos initiatives humanitaires et de faire une réelle différence dans la vie des plus démunis. Merci pour votre soutien continu.</p>
      <div className="buttons">
        <a href="https://www.paypal.com/paypalme/HummAction93" target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#0070ba', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Faire un don via PayPal
          </button>
        </a>
        <a href="https://forms.gle/gRCNow9gZNxT7rEE8" target="_blank" rel="noopener noreferrer">        
          <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#32CD32', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Rejoindre l'association
          </button>
        </a>
      </div>
    </div>
    

    

  </div>
);

export default Participation;