import React, { FC } from 'react';

const Contact: FC<{}> = () => {
  return (
    <section id="contact" className="l-contact">
      <div className="p-contact">
        <h2 className="p-contact__title u-underline u-underline--color">
          CONTACT
        </h2>
        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfy9C_fEmG8ZPmM8ZvIQNyfjwlWWSG24_Sas0tuQ7jUmJc17Q/formResponse"
          className="p-contact__form"
        >
          <input
            type="email"
            placeholder="電子メール"
            className="p-contact__email"
            name="emailAddress"
            required
          />
          <input
            type="text"
            placeholder="お名前"
            className="p-contact__name"
            name="entry.506983924"
            required
          />
          <input
            type="text"
            placeholder="件名"
            className="p-contact__subject"
            name="entry.810280612"
            required
          />
          <textarea
            placeholder="お問い合わせ内容"
            className="p-contact__text"
            name="entry.368354375"
            required
          />
          <input type="submit" value="SEND" className="p-contact__submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
