import React from 'react';

function BreedsSelect({ breeds, selectedBreed, handleChange }) {
  return (
    <select value={selectedBreed} onChange={handleChange}>
      {breeds.map(breed => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  );
}

export default BreedsSelect;
