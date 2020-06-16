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
import VoteAppTopImage from 'images/Vote_App_top.png';
import VoteAppSPImage from 'images/Vote_App_sp.png';
import VoteAppPCImage from 'images/Vote_App_pc.png';
import COVIDTopImage from 'images/COVID-19-Compensation_top.png';
import COVIDSPImage from 'images/COVID-19-Compensation_sp.png';
import COVIDPCImage from 'images/COVID-19-Compensation_pc.png';

interface Tab {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
              目的 機能概要 工夫箇所 制作期間
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
      image: PortfolioTopImage,
      alt: '作成したポートフォリオのトップページ画像',
      DeviceTab: [
        {
          menuItem: 'PC',
          render: () => (
            <Tab.Pane className="c-modal__imageBox">
              <img
                className="c-modal__image -sp"
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
      image: IventTopImage,
      alt: '主催したイベントのホームページ画像',
      DeviceTab: [
        {
          menuItem: 'PC',
          render: () => (
            <Tab.Pane className="c-modal__imageBox">
              <img
                className="c-modal__image -sp"
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
      image: TurtleRabbitTopImage,
      alt: '作成したwebアプリの画像',
      DeviceTab: [
        {
          menuItem: 'PC',
          render: () => (
            <Tab.Pane className="c-modal__imageBox">
              <img
                className="c-modal__image -sp"
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
      image: VoteAppTopImage,
      alt: '作成したwebアプリの画像',
      DeviceTab: [
        {
          menuItem: 'PC',
          render: () => (
            <Tab.Pane className="c-modal__imageBox">
              <img
                className="c-modal__image -sp"
                src={VoteAppPCImage}
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
                src={VoteAppSPImage}
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
              自分の選挙区を確認するWebアプリです。若者の投票率を上げることで若者が住みやすい社会(結婚や子育てがしやすい社会)にしたいと思ったことから作りました。若者の投票率を上げることで政治家の方が若者の投票率を無視できなくります。そうすると政治家の方は若者向けの政策を作らざるを得なくなります。そのようにして若者向けの政策を多く作ってもらい若者が住みやすい社会を作りたいです。
              <br />
              AWS:
              <a href="https://master.d1i2pncgsh43i8.amplifyapp.com/">
                https://master.d1i2pncgsh43i8.amplifyapp.com/
              </a>
              <br />
              GAE:
              <a href="https://yamabaku-vote-app.appspot.com/">
                https://yamabaku-vote-app.appspot.com/
              </a>
            </Tab.Pane>
          ),
        },
        {
          menuItem: '機能概要',
          render: () => (
            <Tab.Pane>
              ・選挙区確認アプリ
              <br />
              ・React,firebaseを使用
              <br />
              ・現在は三重県と愛知県のみ対応
              <br />
              将来的には選挙区の立候補者一覧や政策を掲載、その立候補者の政策達成率などを載せていきたいです。また、若者が選挙に興味を持つような工夫も盛り込んでいきたいと思っています。例えば、選挙中に選挙に行ったら割引しますというようなキャンペーンを行っている企業があります。その企業に協力して頂き、この選挙に行くとこのアプリからクーポンをダウンロードできるようにするなどして選挙に行くことでお得なことがあるということを若者に広めて行きたいです。そのためにはクーポンを掲載してくださる企業側のメリットが必要ですが、現在はまでどのようにメリットを提供できるか検討しています。
            </Tab.Pane>
          ),
        },
        {
          menuItem: '工夫箇所',
          render: () => (
            <Tab.Pane>
              URLに日本語を使用しているのですが、AWSのリダイレクト設定では日本語をURLに含めるとリダイレクトに失敗しました。そこで、日本語の部分をURLエンコーダーで変換し、その値をリダイレクト設定に用いることでその問題を解決しました。
            </Tab.Pane>
          ),
        },
        {
          menuItem: '制作期間',
          render: () => (
            <Tab.Pane>12時間(コーディングからデプロイまで)</Tab.Pane>
          ),
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
          render: () => (
            <Tab.Pane className="c-modal__imageBox">
              <img
                className="c-modal__image -sp"
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
              <a href="https://yamabaku-vote-app.appspot.com/">
                https://yamabaku-vote-app.appspot.com/
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
