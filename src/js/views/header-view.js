class HeaderView {
  headerHTML() {
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
}

export default new HeaderView();
