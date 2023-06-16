import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../Components/Header';
import Body from '../Components/Body';
import Footer from '../Components/Footer';

function App() {
  const [headerBackground, setHeaderBackground] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setHeaderBackground('white');
      } else {
        setHeaderBackground('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <div id='root'>
    <div id="WholeContainer">
      <Header background={headerBackground} />
      <Body />
      <Footer />
    </div>
    // </div>
  );
}

export default App;
