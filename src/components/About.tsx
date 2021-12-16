import React, { FC } from 'react';
import QiitaImage from 'images/Qiita.png';
import GitHubImage from 'images/GitHub.png';
import AvatarImage from 'images/avatar.png';

const About: FC<{}> = () => (
  <section id="about" className="l-about">
    <div className="p-about">
      <h2 className="p-about__title u-underline">ABOUT ME</h2>
      <div className="p-about__wrap">
        <div className="p-about__container">
          <div className="p-about__pro">
            <h3 className="p-about__pc p-about__profile p-about__profile--pc">
              My Profile
            </h3>
            <p className="p-avatar">
              <img
                src={AvatarImage}
                alt="プロフィール画像です"
                className="p-avatar__top"
              />
            </p>
          </div>
          <ul className="p-about__list">
            <li className="p-about__item">名前:山下 佳真</li>
            <br />
            <li className="p-about__item">年齢:26歳</li>
            <br />
            <li className="p-about__item">
              職業:自動車関係(メーターのデバッグ業務)
            </li>
            <br />
            <li className="p-about__item">
              志望する職業:フロントエンドエンジニア
            </li>
          </ul>
        </div>
        <div className="p-about__container">
          <h3 className="p-about__pc p-about__intro p-about__intro--pc">
            自己紹介
          </h3>
          <div className="p-about__box">
            <p className="p-about__text">
              はじめまして。山下 佳真と申します。
              <br />
              よろしくお願い致します。
            </p>
            <p className="p-about__text">
              以下の作品欄に私が作成したものを載せていますのでご覧頂ければ幸いです。また、以下のアイコンからTwitter、Qiita、GitHubに飛ぶことができるのでご確認ください。
            </p>
          </div>
        </div>
      </div>
      <div className="p-about__icon">
        <div className="p-about__fonts">
          <a href="https://twitter.com/Tapi_tapirus">
            <i className="fab fa-twitter-square p-about__twitter" />
          </a>
          <p className="p-skill__text" />
        </div>
        <div className="p-about__qiita">
          <a href="https://qiita.com/yama-baku" className="p-about__link">
            <img className="p-about__image" src={QiitaImage} alt="Qiitaロゴ" />
          </a>
        </div>
        <div className="p-about__github">
          <a
            href="https://github.com/Yamashita-Yoshimasa"
            className="p-about__link"
          >
            <img
              className="p-about__image"
              src={GitHubImage}
              alt="GitHubロゴ"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
