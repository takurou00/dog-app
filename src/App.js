import React, { useState } from 'react';
import Header from './components/Header';
import Description from './components/Description';
import DogImage from './components/DogImage';
import DogListContainer from './components/DogListContainer';
import './App.css';

function App() {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg'
  );

  const handleClick = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogUrl(data.message))
      .catch(error => console.error(error));
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Description dogUrl={dogUrl} handleClick={handleClick} />
        <DogImage url={dogUrl} />
        <DogListContainer />
      </div>
    </div>
  );
}

export default App;

