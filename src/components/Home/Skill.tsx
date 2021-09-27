import React, { FC } from 'react';

const Skill: FC<{}> = () => {
  return (
    <section id="skill" className="l-skill">
      <div className="p-skill">
        <h2 className="p-skill__title u-underline u-underline--color">
          MY SKISLLS
        </h2>
        <div className="p-skill__table">
          <div className="p-skill__fonts">
            <i className="fab fa-html5 p-skill__fonts--html" />
            <p className="p-skill__name">HTML</p>
          </div>
          <div className="p-skill__fonts">
            <i className="fab fa-css3-alt p-skill__fonts--css" />
            <p className="p-skill__name">CSS</p>
          </div>
          <div className="p-skill__fonts">
            <i className="fab fa-sass p-skill__fonts--sass" />
            <p className="p-skill__name">Sass</p>
          </div>
          <div className="p-skill__fonts">
            <i className="fab fa-js p-skill__fonts--js" />
            <p className="p-skill__name">JavaScript</p>
          </div>
          <div className="p-skill__fonts">
            <i className="fab fa-react p-skill__fonts--python" />
            <p className="p-skill__name">React</p>
          </div>
          <div className="p-skill__fonts">
            <i className="cib-typescript p-skill__fonts--excel" />
            <p className="p-skill__name">TypeScript</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
