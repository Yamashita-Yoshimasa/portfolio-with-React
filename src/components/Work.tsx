/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable prefer-destructuring */
import React, { FC } from 'react';
import { Modal, Tab } from 'semantic-ui-react';
import { WorkData } from './WorkList';

const Work: FC<{}> = () => {
  let PCTab: Element;
  let SPTab: Element;
  const GetTabItem = () => {
    const DeviceTab = document.getElementsByClassName('item');
    PCTab = DeviceTab[0];
    SPTab = DeviceTab[1];
  };

  const ClassAddToDeactiveTab = () => {
    if (SPTab.className === 'item') {
      SPTab.classList.add('c-modal__deactive');
    } else if (PCTab.className === 'item') {
      PCTab.classList.add('c-modal__deactive');
    }
  };

  const DeactiveTabCliclLisner = () => {
    ClassAddToDeactiveTab();
    const DeactiveTab = document.getElementsByClassName('c-modal__deactive')[0];
    if (DeactiveTab) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      DeactiveTab.addEventListener('click', () => ScrollToTop());
    }
  };

  const wait = (ms: number) =>
    new Promise(resolve => setTimeout(() => resolve(), ms));

  const ScrollToTop = async () => {
    await wait(0);
    GetTabItem();
    DeactiveTabCliclLisner();
    document.getElementsByClassName('c-modal__imageBox')[0].scrollTo(0, 0);
  };

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
                <li className="p-works__item" onClick={() => ScrollToTop()}>
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
