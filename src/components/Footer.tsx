import React, { FC } from 'react';

const Footer: FC<{}> = () => (
  <footer className="l-footer">
    <div className="p-footer">
      <h2 className="p-footer__title">Yamashita's Portfolio</h2>
      <address className="p-footer__address">
        <p className="p-footer__e-mail">Mail:yychbook040720@gmail.com</p>
      </address>
      <div className="p-footer__fonts">
        <a href="https://twitter.com/Tapi_tapirus">
          <i className="fab fa-twitter-square p-footer__twitter" />
          <p className="p-footer__twitter--text">My Twitter account</p>
        </a>
        <p className="p-skill__text" />
      </div>
      <p className="p-footer__copy">
        <small>©︎ 2019 portfolio.yamabaku.work</small>
      </p>
    </div>
  </footer>
);

export default Footer;
