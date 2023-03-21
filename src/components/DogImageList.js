import React from 'react';

function DogImageList({ imageList }){
    return(
        <div>
            {imageList.map((imageUrl,index) => (
                <img key={index} src={imageUrl} alt="犬の画像" />
            ))}
        </div>
    );
}

export default DogImageList;