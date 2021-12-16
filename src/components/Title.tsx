import React, { FC, useEffect, useState, useCallback } from 'react';
import {
  GetCenterPosition,
  GetTitlePosition,
} from 'containers/GetCenterPosition';

const Title: FC<{}> = () => {
  const [position, setPosition] = useState(0);

  const SetTItlePosition = useCallback(() => {
    if (position === 0) {
      setPosition(GetCenterPosition() - GetTitlePosition());
    } else {
      window.addEventListener('resize', () =>
        setPosition(GetCenterPosition() - GetTitlePosition()),
      );
    }
  }, [position]);

  useEffect(() => {
    SetTItlePosition();
  }, [SetTItlePosition]);

  const style = {
    marginTop: position,
  };

  return (
    <div id="title" className="p-top" style={style}>
      <h2 className="p-top__title">
        Yamashita&apos;s <br />
        Portfolio
      </h2>
    </div>
  );
};

export default Title;
