import React, { FC } from 'react';

const Footer: FC<{}> = () => (
  <footer className="l-footer">
    <div className="p-footer">
      <h2 className="p-footer__title">Yamashita&apos;s Portfolio</h2>
      <address className="p-footer__address">
        <p className="p-footer__e-mail">Mail:yychbook040720@gmail.com</p>
      </address>
      <p className="p-footer__copy">
        <small>©︎ 2019 react-portfolio.yamabaku.work</small>
      </p>
    </div>
  </footer>
);

export default Footer;
