import React, { useEffect, useState, FC } from 'react';

const scrollTop = (): number => {
  return Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop,
  );
};

export interface ToggleProps {
  BarClass?: string;
  ToggleClass?: () => void;
}

const NavBar: FC<ToggleProps> = ({
  BarClass = '',
  ToggleClass = () => undefined,
}) => {
  const [HeaderTop, setHeader] = useState(0);
  const [AboutTop, setAbout] = useState(0);
  const [SkillTop, setSkill] = useState(0);
  const [isTop, setIsTop] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onScroll = (): void => {
    const position = scrollTop();
    if (position >= SkillTop) {
      setIsTop('is-active--top');
    } else if (position >= AboutTop) {
      setIsTop('is-active--about');
    } else if (position <= AboutTop) {
      setIsTop('is-active--top');
    }
  };
  useEffect(() => {
    const HeaderPosition = document.getElementById('header')?.offsetTop;
    const AboutPosition = document.getElementById('about')?.offsetTop;
    const SkillPosition = document.getElementById('skill')?.offsetTop;
    const Header = HeaderPosition || 0;
    const About = AboutPosition || 0;
    const Skill = SkillPosition || 0;
    setHeader(Header);
    setAbout(About);
    setSkill(Skill);
    document.addEventListener('scroll', onScroll);

    return (): void => document.removeEventListener('scroll', onScroll);
  }, [HeaderTop, AboutTop, SkillTop, onScroll]);

  /* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable jsx-a11y/no-static-element-interactions */

  return (
    <div className="p-header__hamburger" onClick={() => ToggleClass()}>
      <div className="p-header__hamburger--toggle">
        <span className={`p-header__hamburger--bar ${isTop} ${BarClass}`} />
        <span className={`p-header__hamburger--bar ${isTop} ${BarClass}`} />
        <span className={`p-header__hamburger--bar ${isTop} ${BarClass}`} />
      </div>
    </div>
  );
};

export default NavBar;
