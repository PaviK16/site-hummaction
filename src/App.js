import React from 'react';

import { AboutUs, Projets, Reseaux, Footer, Gallery, Header, Partenaires, Participation } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Projets />
    <Participation />
    <Partenaires />
    {/*<Gallery />
    <Reseaux />
<Footer />*/}
  </div>
);

export default App;
