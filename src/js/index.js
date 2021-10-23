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
import orderFormView from './views/order-form-view.js';
import overlayView from './views/overlay-view.js';
import cartView from './views/cart-view.js';

const aboutPageController = function () {
  mainWrapperView.swapAndRenderSection(
    'header',
    headerView.createAddressBannerMarkup(model.state.info, model.state.address)
  );
  mainWrapperView.swapAndRenderSection(
    'main',
    aboutView.createMarkup(model.state.aboutStory)
  );
};

const menuPageController = function () {
  mainWrapperView.swapAndRenderSection(
    'header',
    headerView.createAddressBannerMarkup(model.state.info, model.state.address)
  );
  mainWrapperView.swapAndRenderSection(
    'main',
    bowlView.createMarkup(model.state.recipes)
  );
};

const locationPageController = function () {
  mainWrapperView.swapAndRenderSection(
    'header',
    headerView.createAddressBannerMarkup(model.state.info, model.state.address)
  );
  mainWrapperView.swapAndRenderSection('main', locationView.createMarkup());
};

const homePageController = function () {
  mainWrapperView.swapAndRenderSection(
    'header',
    headerView.createHeroMarkup(model.state.info, model.state.address)
  );
  mainWrapperView.swapAndRenderSection(
    'main',
    bowlView.createMarkup(model.state.recipes)
  );
};

const orderFormController = function () {
  mainWrapperView.renderHTML(
    orderFormView.createMarkup(
      model.state.recipes,
      model.state.order.totalPrice
    )
  );
  mainWrapperView.renderHTML(overlayView.createMarkup(), 'afterend');
  //btn handlers
  orderFormView.addItemToCardHandler(addToCartController);
  orderFormView.addViewCartHandler(displayCartController);
  overlayView.addOverlayHandler(addOverlayController);
  orderFormView.addSubmitOrderHandler(submitFormHandler);
};

const addOverlayController = function () {
  mainWrapperView.removeElement('.order-form');
  mainWrapperView.removeElement('.overlay');
  if (mainWrapperView.elementExist('.view-current-cart'))
    mainWrapperView.removeElement('.view-current-cart');
};

const addToCartController = function (bowlName) {
  //get item
  const bowl = model.state.recipes.find(item => item.title === bowlName);
  //add item to cart
  model.state.order.cart.push(bowl);
  //add price to total
  model.state.order.totalPrice += bowl.price;
  //update display on total price
  orderFormView.updateTotalPriceMarkup(model.state.order.totalPrice);
  updateCartDisplay();
};
const updateCartDisplay = function () {
  if (!mainWrapperView.elementExist('.view-current-cart')) return;
  mainWrapperView.swapAndRenderSection(
    '.view-current-cart',
    cartView.createMarkup(model.state.order.cart)
  );
  cartView.addRemoveItemHandler(addRemoveCartItemController);
  dom.i2svg();
};
const displayCartController = function () {
  if (mainWrapperView.elementExist('.view-current-cart')) {
    mainWrapperView.removeElement('.view-current-cart');
    return;
  }
  mainWrapperView.renderHTML(cartView.createMarkup(model.state.order.cart));
  cartView.addRemoveItemHandler(addRemoveCartItemController);
  dom.i2svg();
};

const addRemoveCartItemController = function (data) {
  const bowl = model.state.order.cart.splice(data, 1);
  console.log(bowl);
  model.state.order.totalPrice -= bowl[0].price;
  orderFormView.updateTotalPriceMarkup(model.state.order.totalPrice);
  updateCartDisplay();
};

const submitFormHandler = function () {};
//
const pageSwitchController = function (page) {
  if (page === 'home') homePageController();
  if (page === 'about') aboutPageController();
  if (page === 'menu') menuPageController();
  if (page === 'location') locationPageController();
  if (page === 'order') orderFormController();
  dom.i2svg();
};

const init = function () {
  mainWrapperView.renderHTML(navBarView.createMarkup());
  mainWrapperView.renderHTML(
    headerView.createHeroMarkup(model.state.info, model.state.address)
  );
  mainWrapperView.renderHTML(bowlView.createMarkup(model.state.recipes));
  mainWrapperView.renderHTML(bannerView.createImageBannerMarkup());
  mainWrapperView.renderHTML(
    footerView.createMarkup(
      model.state.socialMedia,
      model.state.info,
      model.state.address
    )
  );
  //create event listeners for navigation links
  navBarView.addHandlerClick(pageSwitchController);
  dom.i2svg();
};
init();
