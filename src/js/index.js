import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

dom.i2svg();

import '../css/reset.css';
import '../css/main.css';

import * as model from './model.js';
import navBarView from './views/nav-bar-view.js';

//Create nav bar
const mainWrapper = document.querySelector('.main-wrapper');
mainWrapper.insertAdjacentHTML('afterbegin', navBarView.getHtml());
