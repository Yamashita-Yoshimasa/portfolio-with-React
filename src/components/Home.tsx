import React, { FC } from 'react';
import Header from 'containers/Header';
import Footer from 'components/Home/Footer';
import About from 'components/Home/About';
import Work from 'components/Home/Work';
import Skill from 'components/Home/Skill';
import Contact from 'components/Home/Contact';
import NavBar from 'containers/Navigation';

const Home: FC<{}> = () => (
  <div className="l-all">
    <Header />
    <About />
    <Work />
    <Skill />
    <Contact />
    <Footer />
    <NavBar />
  </div>
);
export default Home;
