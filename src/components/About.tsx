import React, { FC } from 'react';
import AvatarImage from '../images/avatar.png';

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
            <li className="p-about__item">年齢:24歳(1995/04/20)</li>
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
              私の一番やりたい事は人の役に立つ事です。それを考えた時思いついたのがWeb開発でした。なぜWeb開発なのかと言うと、Web開発はスピード感を持って多くの人に便利で役に立つものを届けることができると思ったからです。そして、そこから独学でWeb開発の学習をはじめました。HTML/CSSから勉強をはじめ、今ではReactでWebページ作成、GAEでデプロイ、Web上に公開までできるようになりました。基礎的な事はできるようになったと思い、本格的に転職を考えこのポートフォリオサイトを作成しました。以下の作品欄に私が作成したものを載せていますのでご覧頂ければ幸いです。また、Qiitaには私が勉強したこと、GitHubには私が書いたプログラムを載せています。そちらもよろしくお願いします。Qiita、GItHubは以下のリンクから飛ぶことができます
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
