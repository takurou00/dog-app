import React, { useState, useEffect } from 'react';
import BreedsSelect from './BreedsSelect';
import DogImageList from './DogImageList';

function DogListContainer() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [imageList,setImageList] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const breedList = Object.keys(data.message);
        setBreeds(breedList);
      })
      .catch(error => console.error(error));
  }, []);

  const handleSelectChange = event => {
    setSelectedBreed(event.target.value);
  };

  const handleShowButtonClick = () => {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
    .then(response => response.json())
    .then(data => setImageList(data.message))
    .catch(error => console.error(error));
  }

  return (
    <div>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        handleChange={handleSelectChange}
        />
        <button onClick={handleShowButtonClick}>表示</button>
        <DogImageList imageList={imageList} />
    </div>
  );
}

export default DogListContainer;
