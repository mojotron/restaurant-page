import infoView from './info-view.js';
class HeaderView {
  createHeroMarkup(address, info) {
    return `
      <header class="header-wrapper">
          <div class="header">
            <h1 class="main-heading">mojo ramen</h1>
            ${infoView.createMarkup(address, info)}
          </div>
      </header>
    `;
  }

  createAddressBannerMarkup(address, info) {
    return `
      <header class="info-banner">
        <h3 class="info-banner-heading">Mojo Bowls</h3>
        ${infoView.createMarkup(address, info)}
      </header>
    `;
  }
}

export default new HeaderView();
