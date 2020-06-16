import React, { FC } from 'react';
import { Modal, Tab } from 'semantic-ui-react';
import { WorkData } from './WorkList';

const Work: FC<{}> = () => {
  return (
    <section id="works" className="l-works">
      <div className="p-works">
        <h2 className="p-works__title u-underline">WORKS</h2>
        <p className="p-works__sp">Please touch images!</p>
        <ul className="p-works__list">
          {WorkData.List.map(item => (
            <Modal
              closeIcon
              key={item.id}
              trigger={
                <li className="p-works__item">
                  <p className="p-works__image-box">
                    <img
                      className="p-works__image"
                      src={item.image}
                      alt={item.alt}
                    />
                  </p>
                </li>
              }
            >
              <Modal.Header>{item.name}</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <div className="c-modal -flex">
                    <Tab panes={item.DeviceTab} className="c-modal__item" />
                    <Tab panes={item.IntroTab} className="c-modal__item" />
                  </div>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
