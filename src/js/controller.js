import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

import '../css/reset.css';
import '../css/main.css';

import {
  HEADER_SELECTOR,
  MAIN_SELECTOR,
  OVERLAY_SELECTOR,
  FORM_SELECTOR,
  CART_SELECTOR,
  EMPTY_CART_MESSAGE,
} from './config.js';

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
    HEADER_SELECTOR,
    headerView.createAddressBannerMarkup(model.state.info, model.state.address)
  );
  mainWrapperView.swapAndRenderSection(
    MAIN_SELECTOR,
    aboutView.createMarkup(model.state.aboutStory)
  );
};

const menuPageController = function () {
  mainWrapperView.swapAndRenderSection(
    HEADER_SELECTOR,
    headerView.createAddressBannerMarkup(model.state.info, model.state.address)
  );
  mainWrapperView.swapAndRenderSection(
    MAIN_SELECTOR,
    bowlView.createMarkup(model.state.recipes)
  );
};

const locationPageController = function () {
  mainWrapperView.swapAndRenderSection(
    HEADER_SELECTOR,
    headerView.createAddressBannerMarkup(model.state.info, model.state.address)
  );
  mainWrapperView.swapAndRenderSection(
    MAIN_SELECTOR,
    locationView.createMarkup()
  );
};

const homePageController = function () {
  mainWrapperView.swapAndRenderSection(
    HEADER_SELECTOR,
    headerView.createHeroMarkup(model.state.info, model.state.address)
  );
  mainWrapperView.swapAndRenderSection(
    MAIN_SELECTOR,
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
  mainWrapperView.removeElement(FORM_SELECTOR);
  mainWrapperView.removeElement(OVERLAY_SELECTOR);
  if (mainWrapperView.elementExist(CART_SELECTOR))
    mainWrapperView.removeElement(CART_SELECTOR);
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
  if (!mainWrapperView.elementExist(CART_SELECTOR)) return;
  mainWrapperView.swapAndRenderSection(
    CART_SELECTOR,
    cartView.createMarkup(model.state.order.cart)
  );
  cartView.addRemoveItemHandler(addRemoveCartItemController);
  dom.i2svg();
};
const displayCartController = function () {
  if (mainWrapperView.elementExist(CART_SELECTOR)) {
    mainWrapperView.removeElement(CART_SELECTOR);
    return;
  }
  mainWrapperView.renderHTML(cartView.createMarkup(model.state.order.cart));
  cartView.addRemoveItemHandler(addRemoveCartItemController);
  dom.i2svg();
};

const addRemoveCartItemController = function (data) {
  const bowl = model.state.order.cart.splice(data, 1);
  model.state.order.totalPrice -= bowl[0].price;
  orderFormView.updateTotalPriceMarkup(model.state.order.totalPrice);
  updateCartDisplay();
};

const submitFormHandler = function () {
  //check if cart empty
  if (model.state.order.cart.length === 0) {
    mainWrapperView.alertMessage(EMPTY_CART_MESSAGE);
    return;
  }
  //check are input
  const emptyInput = orderFormView.checkEmptyInput();
  if (emptyInput) {
    mainWrapperView.alertMessage(emptyInput);
    return;
  }
  const paymentMethod = orderFormView.checkPaymentInput();
  if (paymentMethod) {
    mainWrapperView.alertMessage(paymentMethod);
    return;
  }
  //close modals
  addOverlayController();
  //reset order data
  model.state.order.cart = [];
  model.state.order.totalPrice = 0;
};
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
  footerView.addOrderBtnHandler(orderFormController);
  dom.i2svg();
};
init();
