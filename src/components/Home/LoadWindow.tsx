import React, { FC, useEffect, useState } from 'react';
import { LoadComplete } from 'containers/LoadComplete';
import LoadingImage from 'images/LoadImage.png';
import { GetCenterPosition } from 'containers/GetCenterPosition';

const LoadWindow: FC<{}> = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const WindowWidth = window.innerWidth;
    if (WindowWidth < 1024) {
      setPosition(GetCenterPosition() - 100);
    } else {
      setPosition(GetCenterPosition() - 200);
    }
    LoadComplete();
  }, []);

  const style = {
    marginTop: position,
  };

  return (
    <div id="Loading" className="c-load -is-active">
      <img
        className="c-load__image"
        style={style}
        src={LoadingImage}
        alt="load画像"
      />
      <p className="c-load__text -view">Now Loading</p>
    </div>
  );
};

export default LoadWindow;
