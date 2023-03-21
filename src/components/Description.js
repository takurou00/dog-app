import React from 'react';
import DogImage from './DogImage';

function Description({ dogUrl, handleClick }){
    return(
        <div>
            <p>犬の画像を表示するサイトです</p>
            <DogImage url={dogUrl} />
            <button onClick={handleClick}>更新</button>
        </div>
    );
}

export default Description;