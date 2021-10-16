class HeaderView {
  createHeroMarkup() {
    return `
      <header class="header-wrapper">
          <div class="header">
            <h1 class="main-heading">mojo ramen</h1>
            <p class="heading-address">Arena Centar Mall, inside food corner</p>
            <p class="heading-address">
              (Ul. Vice Vukova 6, 10020, Zagreb, Croatia)
            </p>
          </div>
      </header>
    `;
  }

  createAddressBannerMarkup() {
    return `
      <section class="info-banner">
        <h3 class="info-banner-heading">Mojo Bowls</h3>
        <p class="info-banner-address">
          Ul. Vice Vukova 6, 10020, Zagreb, Croatia
        </p>
        <p class="info-banner-address">(Arena Centar Mall, inside food corner)</p>
      </section>
    `;
  }
}

export default new HeaderView();
