import React, { useState, useEffect } from 'react';
import './App.css';
import Cover from "./componets/cover";
import Navbar from './componets/Navbar';
import About from './componets/About';
import Slider from './componets/Slider';
import Info from './componets/Info';
import Footer from './componets/Footer';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);


  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {

    window.addEventListener("scroll", handleScroll)

  }, [scrollHeight])

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Slider />
      <Info />
      <Footer />
    </div>




  );
}



export default App;

