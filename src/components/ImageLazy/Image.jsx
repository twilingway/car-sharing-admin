import React, { useState } from 'react';
import nocar from '../../images/nocar.png';

function Image({ src, alt, noImage = nocar }) {
  const [isImgError, setIsImgError] = useState(false);

  const hangleOnLoadImgError = (event) => {
    setIsImgError(true);
  };

  return (
    <img
      loading="lazy"
      src={
        isImgError || src === undefined
          ? noImage
          : `${process.env.REACT_APP_BASE_URL}${src}`
      }
      alt={alt}
      onError={(event) => hangleOnLoadImgError(event)}
    />
  );
}

export default Image;
