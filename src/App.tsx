import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import LoadWindow from 'components/LoadWindow';
import Header from 'containers/Header';
import Footer from 'components/Footer';
import About from 'components/About';
import Work from 'components/Work';
import Skill from 'components/Skill';
import Contact from 'components/Contact';
import NavBar from 'containers/Navigation';

const App: FC<{}> = () => (
  <BrowserRouter>
    <Redirect to="/" />
    <LoadWindow />
    <div className="l-all">
      <Header />
      <About />
      <Work />
      <Skill />
      <Contact />
      <Footer />
      <NavBar />
    </div>
  </BrowserRouter>
);
export default App;
