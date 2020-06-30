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
            <li className="p-about__item">年齢:25歳</li>
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
              私は現在Web制作、web開発の学習を初めて1年ほどになります(2019/06から学習開始)。そして、2020年1月に初案件を獲得しました。また、「ネットでもくもく会」という勉強会を開催して、私の案件をとった経験や、勉強法などを共有しています。さらに、Twitterで知り合ったフリーランスの方に講師として参加して頂いた「現役フリーランスに相談しよう！」というイベントも企画、開催しました。
            </p>
            <p className="p-about__text">
              勉強をし始めた頃はサイト制作なんてできるのかと思っていましたが、コツコツと続けた結果案件を獲得し、Twitterいろいろな人と出会いイベントを開催するようになりました。また、このポートフォリオサイトはGoogle
              App
              Engineを用いて公開しています。半年前の自分では考えられなかった技術を今は使えるようになりました。すべて独学でWebサイトのコーディングからクラウドサービスへのデプロイ(https通信に対応させています)まで行えたので、自走力はかなりあると思っています。
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
