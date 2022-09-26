import { generate } from 'shortid';
import en from '../../../assets/img/flags/en.png';
import ua from '../../../assets/img/flags/ua.png';
import gn from '../../../assets/img/flags/gn.png';

import imgSrc1 from '../../../assets/img/top-nav-menu/headline_OIL_06.jpg';
import imgSrc2 from '../../../assets/img/top-nav-menu/headline_shutterstock_330880379.jpg';
import imgSrc3 from '../../../assets/img/top-nav-menu/headline_stock_board_chicago.jpg';

const Langs = {
  en: { id: generate(), lang: 'en', imgSrc: en },
  ua: { id: generate(), lang: 'ua', imgSrc: ua },
  gn: { id: generate(), lang: 'gn', imgSrc: gn },
};

export const LangsData = new Proxy(Langs, {
  get(langs, lang) {
    if (!lang) {
      return langs.en;
    }

    if (langs[lang]) {
      return langs[lang];
    }

    return langs.en;
  },
});

export const listLangs = Object.values(Langs);

//
//

export const subMenuData = {
  'Market News': {
    nameNav: 'Market News',

    subListMenu: [
      'Market Overview',
      'Real-Time News',
      'Forecasts',
      'Markets Outlook',
    ],

    subListMenuPosts: [
      {
        id: generate(),
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
        imgSrc: imgSrc1,
      },
      {
        id: generate(),
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
        imgSrc: imgSrc2,
      },
      {
        id: generate(),
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
        imgSrc: imgSrc3,
      },
    ],
  },

  'Market Strategies': {
    nameNav: 'Market Strategies',

    subListMenu: [
      'Market Overview 2',
      'Real-Time News 2',
      'Forecasts 2',
      'Markets Outlook 2',
    ],

    subListMenuPosts: [
      {
        id: generate(),
        title: 'Lorem ipsum 2',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
        imgSrc: imgSrc1,
      },
      {
        id: generate(),
        title: 'Lorem ipsum 2',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
        imgSrc: imgSrc2,
      },
      {
        id: generate(),
        title: 'Lorem ipsum 2',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
        imgSrc: imgSrc3,
      },
    ],
  },
};
