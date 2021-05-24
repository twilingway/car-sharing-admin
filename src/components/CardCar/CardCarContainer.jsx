import React from 'react';
import CardCar from './CardCar';

function CardCarContainer() {
  const handleSelectFile = (event) => {
    console.log('event :>> ', event.target.value);
    console.log('eventTarget :>> ', event);
    const fileName = event.target.value;
    const idxDot = fileName.lastIndexOf('.') + 1;
    const extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile === 'jpg' || extFile === 'jpeg' || extFile === 'png') {
      // TO DO
    } else {
      alert('Only jpg/jpeg and png files are allowed!');
    }
  };

  return <CardCar onChangeSelectFile={handleSelectFile} />;
}

export default CardCarContainer;
