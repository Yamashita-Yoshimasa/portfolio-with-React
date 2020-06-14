import React, { ReactNode } from 'react';
import { Tab } from 'semantic-ui-react';
import LencerTopImage from '../images/lencer_top.png';
import PortfolioTopImage from '../images/portfolio_top.png';
import IventTopImage from '../images/yamabaku_top.png';
import TurtleRabbitTopImage from '../images/turtle-vs-rabbit_top.png';
import VoteAppTopImage from '../images/Vote_App_top.png';
import COVIDTopImage from '../images/COVID-19-Compensation_top.png';

interface Tab {
  menuItem: any;
  render?: (() => ReactNode) | undefined;
}
interface WorkItem {
  id: number;
  image: string;
  alt: string;
  DeviceTab?: Tab[];
  IntroTab?: Tab[];
}
interface WorkList {
  List: WorkItem[];
}

export const WorkData: WorkList = {
  List: [
    {
      id: 1,
      image: LencerTopImage,
      alt: '担当した案件の画像',
      DeviceTab: [
        {
          menuItem: 'PC',
          render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
        },
        {
          menuItem: 'SP',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
      ],
      IntroTab: [
        {
          menuItem: '目的',
          render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
        },
        {
          menuItem: '機能概要',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
        {
          menuItem: '工夫箇所',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
        {
          menuItem: '制作期間',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
      ],
    },
    {
      id: 2,
      image: PortfolioTopImage,
      alt: '作成したポートフォリオのトップページ画像',
      DeviceTab: [
        {
          menuItem: 'PC',
          render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
        },
        {
          menuItem: 'SP',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
      ],
      IntroTab: [
        {
          menuItem: '目的',
          render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
        },
        {
          menuItem: '機能概要',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
        {
          menuItem: '工夫箇所',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
        {
          menuItem: '制作期間',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
      ],
    },
    {
      id: 3,
      image: IventTopImage,
      alt: '主催したイベントのホームページ画像',
      DeviceTab: [
        {
          menuItem: 'PC',
          render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
        },
        {
          menuItem: 'SP',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
      ],
      IntroTab: [
        {
          menuItem: '目的',
          render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
        },
        {
          menuItem: '機能概要',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
        {
          menuItem: '工夫箇所',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
        {
          menuItem: '制作期間',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
      ],
    },
    {
      id: 4,
      image: TurtleRabbitTopImage,
      alt: '作成したwebアプリの画像',
      DeviceTab: [
        {
          menuItem: 'PC',
          render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
        },
        {
          menuItem: 'SP',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
      ],
      IntroTab: [
        {
          menuItem: '目的',
          render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
        },
        {
          menuItem: '機能概要',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
        {
          menuItem: '工夫箇所',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
        {
          menuItem: '制作期間',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
      ],
    },
    {
      id: 5,
      image: VoteAppTopImage,
      alt: '作成したwebアプリの画像',
      DeviceTab: [
        {
          menuItem: 'PC',
          render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
        },
        {
          menuItem: 'SP',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
      ],
      IntroTab: [
        {
          menuItem: '目的',
          render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
        },
        {
          menuItem: '機能概要',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
        {
          menuItem: '工夫箇所',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
        {
          menuItem: '制作期間',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
      ],
    },
    {
      id: 6,
      image: COVIDTopImage,
      alt: '作成したwebアプリの画像',
      DeviceTab: [
        {
          menuItem: 'PC',
          render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
        },
        {
          menuItem: 'SP',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
      ],
      IntroTab: [
        {
          menuItem: '目的',
          render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
        },
        {
          menuItem: '機能概要',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
        {
          menuItem: '工夫箇所',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
        {
          menuItem: '制作期間',
          render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
        },
      ],
    },
  ],
};
