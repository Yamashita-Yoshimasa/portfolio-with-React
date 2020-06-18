import React, { FC } from 'react';

import TopImage from 'images/top.png';

export interface ToggleProps {
  NavClass?: string;
  BarClass?: string;
  ToggleClass?: () => void;
}
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
const Header: FC<ToggleProps> = ({
  NavClass = '',
  ToggleClass = () => undefined,
}) => (
  <div className="p-bg" style={{ backgroundImage: `url(${TopImage})` }}>
    <header id="header" className="l-header">
      <div className="p-header">
        <div className="p-header__wrap u-flex">
          <h1 className="p-header__title">My Portfolio</h1>
        </div>
        <nav className={`p-header__nav ${NavClass}`}>
          <ul className="p-header__menu">
            <li
              className="p-header__list_item jump_to_top"
              onClick={() => ToggleClass()}
            >
              <a className="p-header__anchor" href="#header">
                TOP
              </a>
            </li>
            <li
              className="p-header__list_item jump_to_about"
              onClick={() => ToggleClass()}
            >
              <a className="p-header__anchor" href="#about">
                ABOUT ME
              </a>
            </li>
            <li
              className="p-header__list_item jump_to_works"
              onClick={() => ToggleClass()}
            >
              <a className="p-header__anchor" href="#works">
                WORKS
              </a>
            </li>
            <li
              className="p-header__list_item jump_to_skills"
              onClick={() => ToggleClass()}
            >
              <a className="p-header__anchor" href="#skill">
                MY SKILLS
              </a>
            </li>
            <li
              className="p-header__list_item jump_to_contact"
              onClick={() => ToggleClass()}
            >
              <a className="p-header__anchor" href="#contact">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <section id="top" className="l-top">
      <div className="p-top">
        <h2 className="p-top__title">
          Yamashita&apos;s <br />
          Portfolio
        </h2>
        <p className="p-top__text">
          山下 佳真と申します。
          <br />
          ここでは簡単な経歴、作品などを掲載しています。
        </p>
      </div>
    </section>
  </div>
);

export default Header;
