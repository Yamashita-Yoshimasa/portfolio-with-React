/* eslint-disable import/no-duplicates */
import React, { ReactNode } from 'react';
import { Tab } from 'semantic-ui-react';
import LencerTopImage from 'images/lencer_top.png';
import LencerSPImage from 'images/lencer_sp.png';
import PortfolioTopImage from 'images/portfolio_top.png';
import PortfolioSPImage from 'images/portfolio_sp.png';
import PortfolioPCImage from 'images/portfolio_pc.png';
import IventTopImage from 'images/yamabaku_top.png';
import IventSPImage from 'images/yamabaku_sp.png';
import IventPCImage from 'images/yamabaku_pc.png';
import TurtleRabbitTopImage from 'images/turtle-vs-rabbit_top.png';
import TurtleRabbitPCImage from 'images/turtle-vs-rabbit_pc.png';
import COVIDTopImage from 'images/COVID-19-Compensation_top.png';
import COVIDSPImage from 'images/COVID-19-Compensation_sp.png';
import COVIDPCImage from 'images/COVID-19-Compensation_pc.png';
import GPUTopImage from 'images/GPU_top.png';
import GPUSPImage from 'images/GPU_sp.png';
import GPUPCImage from 'images/GPU_top.png';

interface Tab {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  menuItem: any;
  render?: (() => ReactNode) | undefined;
}
interface WorkItem {
  id: number;
  name: string;
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
      name: 'Lencer',
      image: LencerTopImage,
      alt: '担当した案件の画像',
      DeviceTab: [
        {
          menuItem: 'SP',
          render: () => (
            <Tab.Pane className="c-modal__imageBox">
              <img
                className="c-modal__image -sp"
                src={LencerSPImage}
                alt="lencerのスマホ画面"
              />
            </Tab.Pane>
          ),
        },
      ],
      IntroTab: [
        {
          menuItem: '目的',
          render: () => (
            <Tab.Pane>
              クラウドワークスの案件で作成したWebアプリのフロント部分をコーディングしました。案件はルートページのコーディングのみでしたが、納品後個別で業務委託を受けこのWebアプリのフロント部分のほとんどをまかせて頂きました。
            </Tab.Pane>
          ),
        },
        {
          menuItem: '機能概要',
          render: () => (
            <Tab.Pane>
              ・バックエンドはRuby on Rails <br />
              ・テスト環境はDocker ・本番環境はHeroku <br />
              ・HTMLはSlimで作成 <br />
              ・CSSはSass,FLOCSSを利用 <br />
              ・JavaScriptはStimulus.jsを利用
            </Tab.Pane>
          ),
        },
        {
          menuItem: '工夫箇所',
          render: () => (
            <Tab.Pane>
              デザインがウィンドウサイズでずれてしまった時は対応方法を確認し、レスポンシブ化しました。
              環境構築でエラーが出たときにその解決方法を調べ、その方法をスクラップボックスにメモし、解決方法を共有しました。
              用意して頂いていた手順書で躓いたり、間違ったりしていた所を報告後追記や修正を行ました。
            </Tab.Pane>
          ),
        },
        {
          menuItem: '制作期間',
          render: () => <Tab.Pane>１月から2月(現在は開発中止)</Tab.Pane>,
        },
      ],
    },
    {
      id: 2,
      name: 'Portfolio',
      image: PortfolioTopImage,
      alt: '作成したポートフォリオのトップページ画像',
      DeviceTab: [
        {
          menuItem: 'PC',
          render: () => (
            <Tab.Pane className="c-modal__imageBox">
              <img
                id="tab-image"
                className="c-modal__image -pc"
                src={PortfolioPCImage}
                alt="portfolioのPC画面"
              />
            </Tab.Pane>
          ),
        },
        {
          menuItem: 'SP',
          render: () => (
            <Tab.Pane className="c-modal__imageBox">
              <img
                className="c-modal__image -sp"
                src={PortfolioSPImage}
                alt="portfolioのスマホ画面"
              />
            </Tab.Pane>
          ),
        },
      ],
      IntroTab: [
        {
          menuItem: '目的',
          render: () => (
            <Tab.Pane>
              転職、クラウドソーシングでの案件獲得用にポートフォリオを作成しました。
            </Tab.Pane>
          ),
        },
        {
          menuItem: '機能概要',
          render: () => (
            <Tab.Pane>
              ・ポートフォリオサイト
              <br />
              ・デザインからコーディングまで行いました
              <br />
              ・HTML/CSSはSass,FLOCSSを利用
              <br />
              ・React,Reduxで作成
            </Tab.Pane>
          ),
        },
        {
          menuItem: '工夫箇所',
          render: () => (
            <Tab.Pane>
              CSS設計にはFLOCSSを使用して作成しています。CSSはSassで作成しています。GCPで独自ドメインを使いデプロイしており、https通信でセキュリティ面も考慮しています。
            </Tab.Pane>
          ),
        },
        {
          menuItem: '制作期間',
          render: () => <Tab.Pane>60時間(1日2時間ほど作業)</Tab.Pane>,
        },
      ],
    },
    {
      id: 3,
      name: '現役フリーランスに相談しよう！',
      image: IventTopImage,
      alt: '主催したイベントのホームページ画像',
      DeviceTab: [
        {
          menuItem: 'PC',
          render: () => (
            <Tab.Pane className="c-modal__imageBox">
              <img
                className="c-modal__image -pc"
                src={IventPCImage}
                alt="イベントサイトのPC画面"
              />
            </Tab.Pane>
          ),
        },
        {
          menuItem: 'SP',
          render: () => (
            <Tab.Pane className="c-modal__imageBox">
              <img
                className="c-modal__image -sp"
                src={IventSPImage}
                alt="イベントサイトのPC画面"
              />
            </Tab.Pane>
          ),
        },
      ],
      IntroTab: [
        {
          menuItem: '目的',
          render: () => (
            <Tab.Pane>
              現役フリーランスの方に駆け出しエンジニアが学習過程で生じた疑問を相談するというイベントを企画し、その応募サイトを作成しました。
              <br />
              <a href="https://yamabaku.work/">yamabaku.work</a>
            </Tab.Pane>
          ),
        },
        {
          menuItem: '機能概要',
          render: () => (
            <Tab.Pane>
              ・イベントの応募サイト
              <br />
              ・応募フォームをGoogleフォームで作成
              <br />
              ・HTML/CSSはSass,FLOCSSを利用
            </Tab.Pane>
          ),
        },
        {
          menuItem: '工夫箇所',
          render: () => (
            <Tab.Pane>
              デザインを知人に依頼し、PSDファイルからコーディングを行いました。GCPでhttps通信に対応
            </Tab.Pane>
          ),
        },
        {
          menuItem: '制作期間',
          render: () => (
            <Tab.Pane>２日間(コーディングからデプロイまで)</Tab.Pane>
          ),
        },
      ],
    },
    {
      id: 4,
      name: 'ウサギとカメ',
      image: TurtleRabbitTopImage,
      alt: '作成したwebアプリの画像',
      DeviceTab: [
        {
          menuItem: 'PC',
          render: () => (
            <Tab.Pane className="c-modal__imageBox">
              <img
                className="c-modal__image -pc"
                src={TurtleRabbitPCImage}
                alt="作成したゲームのPC画面"
              />
            </Tab.Pane>
          ),
        },
      ],
      IntroTab: [
        {
          menuItem: '目的',
          render: () => (
            <Tab.Pane>
              Reactの勉強としてゲームを作成しました。ReactはPropやStateの管理が大切だと考えたのでその二つを使ったゲームを作成することを考えました。またこのアプリの作成手順、作成の際に出たエラーなどを紹介した記事をQiitaに投稿しました。
              <br />
              AWS:
              <a href="https://master.dr3xkhgd68rk0.amplifyapp.com/">
                https://master.dr3xkhgd68rk0.amplifyapp.com
              </a>
              <br />
              GAE:
              <a href="https://turtle-vs-rabbit-sample.appspot.com/">
                https://turtle-vs-rabbit-sample.appspot.com
              </a>
              <br />
              Qiita:
              <a href="https://qiita.com/yama-baku/items/8b156cd2e44c291e130e">
                超初心者のためのReactチュートリアル
              </a>
            </Tab.Pane>
          ),
        },
        {
          menuItem: '機能概要',
          render: () => (
            <Tab.Pane>
              ・ウサギとカメが戦うアプリ
              <br />
              ・Reactを使用
              <br />
              ・react-router-domでページ切り替え
              <br />
              ・Props,Stateでデータ管理
            </Tab.Pane>
          ),
        },
        {
          menuItem: '工夫箇所',
          render: () => (
            <Tab.Pane>
              ダメージを受けるとHPバーの表示の切り替えをPropsとStateを使い実装しました。また、Reactではルートページ以外に直接URLを入力してアクセスすると読み込みに失敗するのですが、GAEとAWSのリダイレクトの設定をすることで直接URL指定してもアクセスできるようにしています。
            </Tab.Pane>
          ),
        },
        {
          menuItem: '制作期間',
          render: () => (
            <Tab.Pane>8時間(コーディングからデプロイまで)</Tab.Pane>
          ),
        },
      ],
    },
    {
      id: 5,
      name: 'Gpu Price Checker',
      image: GPUTopImage,
      alt: '作成したwebアプリの画像',
      DeviceTab: [
        {
          menuItem: 'PC',
          render: () => (
            <Tab.Pane className="c-modal__imageBox">
              <img
                className="c-modal__image -pc"
                src={GPUPCImage}
                alt="作成したアプリのPC画面"
              />
            </Tab.Pane>
          ),
        },
        {
          menuItem: 'SP',
          render: () => (
            <Tab.Pane className="c-modal__imageBox">
              <img
                className="c-modal__image -sp"
                src={GPUSPImage}
                alt="作成したアプリのSP画面"
              />
            </Tab.Pane>
          ),
        },
      ],
      IntroTab: [
        {
          menuItem: '目的',
          render: () => (
            <Tab.Pane>
              マイニング用GPUの価格を確認するためのアプリを作成しました。
              <br />
              Azure:
              <a href="https://gpuscraping.azurewebsites.net/">
                https://gpuscraping.azurewebsites.net/
              </a>
            </Tab.Pane>
          ),
        },
        {
          menuItem: '機能概要',
          render: () => (
            <Tab.Pane>
              ・マイニング用GPUの価格を確認するためのアプリ
              <br />
              ・Reactを使用し、Azureにデプロイ
              <br />
              検索バーにGPUの名前を入力することで在庫のあるGPUの価格を確認することができます。
            </Tab.Pane>
          ),
        },
        {
          menuItem: '工夫箇所',
          render: () => (
            <Tab.Pane>
              商品購入ページのURLは商品IDを用いているため、スクレイピングでIDを取得し、
              URLを書き換えることで気になった商品の購入ページに直接アクセスできるようにしました。
            </Tab.Pane>
          ),
        },
        {
          menuItem: '制作期間',
          render: () => <Tab.Pane>2週間</Tab.Pane>,
        },
      ],
    },
    {
      id: 6,
      name: 'COVID-19 Compensation',
      image: COVIDTopImage,
      alt: '作成したwebアプリの画像',
      DeviceTab: [
        {
          menuItem: 'PC',
          render: () => (
            <Tab.Pane className="c-modal__imageBox">
              <img
                className="c-modal__image -pc"
                src={COVIDPCImage}
                alt="作成したアプリのPC画面"
              />
            </Tab.Pane>
          ),
        },
        {
          menuItem: 'SP',
          render: () => (
            <Tab.Pane className="c-modal__imageBox">
              <img
                className="c-modal__image -sp"
                src={COVIDSPImage}
                alt="作成したアプリのSP画面"
              />
            </Tab.Pane>
          ),
        },
      ],
      IntroTab: [
        {
          menuItem: '目的',
          render: () => (
            <Tab.Pane>
              新型コロナウイルスの影響でたくさんの被害が出ており、その際にTwitterなどで日本はマスク二枚だけしか支援していないなど誤った情報が広がっていました。日本もたくさんの支援をしていると多くの人に知ってもらいたいと思いこのWebサイトを作成しました。今後も新しい助成金などを随時追加していく予定です。
              <br />
              GAE:
              <a href="https://covid-19.yamabaku.work/">
                https://covid-19.yamabaku.work/
              </a>
            </Tab.Pane>
          ),
        },
        {
          menuItem: '機能概要',
          render: () => (
            <Tab.Pane>
              ・国の補償確認サイト
              <br />
              ・Reactを使用
              <br />
              ・Hooksを使って関数コンポーネントのみで作成しています。
              <br />
              GitHub:
              <a href="https://github.com/Yamashita-Yoshimasa/COVID-19-Compensation">
                https://github.com/Yamashita-Yoshimasa/COVID-19-Compensation
              </a>
            </Tab.Pane>
          ),
        },
        {
          menuItem: '工夫箇所',
          render: () => (
            <Tab.Pane>
              助成金や給付金は多くの種類があり、どれが自分に当てはまるのかがわかりにくいと思いました。ですから、まず国からの補償を職種ごとに分類しました。そうすることで一目で自分にあった補償を探すことができます。
            </Tab.Pane>
          ),
        },
        {
          menuItem: '制作期間',
          render: () => (
            <Tab.Pane>25時間(コーディングからデプロイまで)</Tab.Pane>
          ),
        },
      ],
    },
  ],
};
