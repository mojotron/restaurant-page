import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

import '../css/reset.css';
import '../css/main.css';

import * as model from './model.js';
import navBarView from './views/nav-bar-view.js';
import bowlView from './views/bowl-view.js';
import footerView from './views/footer-view.js';
import headerView from './views/header-view.js';

//Create nav bar
const mainWrapper = document.querySelector('.main-wrapper');
const bowlsWrapper = document.querySelector('.bowl-items-wrapper');
mainWrapper.insertAdjacentHTML('afterbegin', navBarView.getHtml());
mainWrapper.insertAdjacentHTML('afterbegin', headerView.headerHTML());
bowlsWrapper.insertAdjacentHTML(
  'beforeend',
  bowlView.bowlsHTML(model.state.recipes)
);
document.body.insertAdjacentHTML(
  'beforeend',
  footerView.footerHTML(
    model.state.socialMedia,
    model.state.info,
    model.state.address
  )
);
dom.i2svg();
//initialize home page on page reload
const init = function () {};
