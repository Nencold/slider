import React from 'react';
import SliderComponent from './Slider/Slider';

import './App.css';


const App = () => {
  const slides = [
    'images/1200x480-howling-wolf-3xvjis1804fz4v5j.jpg',
    'images/1200x480-sakura-tree-3lorr5btufgdi6pj.jpg',
    'images/1200x480-vaporwave-mountains-e1fotmpsfib9vp80.jpg',
    'images/1625170782_37-kartinkin-com-p-fon-dlya-tvicha-krasivie-foni-38.jpg',
    'images/1200x480-pink-eclipse-8oc867idlp81x9ox.jpg'

  ];

  return (
    <div>
      <SliderComponent slides={slides} />
    </div>
  );
};

export default App;

