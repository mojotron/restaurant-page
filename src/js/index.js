import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

import '../css/reset.css';
import '../css/main.css';

import * as model from './model.js';
import navBarView from './views/nav-bar-view.js';
import headerView from './views/header-view.js';
import bowlView from './views/bowl-view.js';
import bannerView from './views/banner-view.js';
import footerView from './views/footer-view.js';
import mainWrapperView from './views/main-wrapper-view.js';
import locationView from './views/location-view.js';
import aboutView from './views/about-view.js';

//initialize home page on page reload
const homePage = function () {
  mainWrapperView.renderHTML(navBarView.createMarkup());
  mainWrapperView.renderHTML(headerView.createHeroMarkup());
  mainWrapperView.renderHTML(
    bowlView.createMarkup(model.state.recipes),
    'beforeend'
  );
  mainWrapperView.renderHTML(bannerView.createImageBannerMarkup(), 'beforeend');
  mainWrapperView.renderHTML(
    footerView.createMarkup(
      model.state.socialMedia,
      model.state.info,
      model.state.address
    ),
    'beforeend'
  );

  navBarView.addHandlerClick(true);
};

homePage();
//

dom.i2svg();
