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

const aboutPageController = function () {
  mainWrapperView.swapAndRenderSection(
    'header',
    headerView.createAddressBannerMarkup()
  );
  mainWrapperView.swapAndRenderSection('main', aboutView.createMarkup());
};

const menuPageController = function () {
  mainWrapperView.swapAndRenderSection(
    'header',
    headerView.createAddressBannerMarkup()
  );
  mainWrapperView.swapAndRenderSection(
    'main',
    bowlView.createMarkup(model.state.recipes)
  );
};

const locationPageController = function () {
  mainWrapperView.swapAndRenderSection(
    'header',
    headerView.createAddressBannerMarkup()
  );
  mainWrapperView.swapAndRenderSection('main', locationView.createMarkup());
};

const homePageController = function () {
  mainWrapperView.swapAndRenderSection('header', headerView.createHeroMarkup());
  mainWrapperView.swapAndRenderSection(
    'main',
    bowlView.createMarkup(model.state.recipes)
  );
};
//
const pageSwitchController = function (page) {
  if (page === 'home') homePageController();
  if (page === 'about') aboutPageController();
  if (page === 'menu') menuPageController();
  if (page === 'location') locationPageController();
  dom.i2svg();
};

const init = function () {
  mainWrapperView.renderHTML(navBarView.createMarkup());
  mainWrapperView.renderHTML(headerView.createHeroMarkup());
  mainWrapperView.renderHTML(bowlView.createMarkup(model.state.recipes));
  mainWrapperView.renderHTML(bannerView.createImageBannerMarkup());
  mainWrapperView.renderHTML(
    footerView.createMarkup(
      model.state.socialMedia,
      model.state.info,
      model.state.address
    )
  );

  navBarView.addHandlerClick(pageSwitchController);
  dom.i2svg();
};
init();
