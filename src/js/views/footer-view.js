class FooterView {
  footerHTML(socialMedia, info, address) {
    return `
      <footer class="footer">
          <nav>
            <ul class="social-icons">
              ${this.socialMediaHTML(socialMedia)}
            </ul>
          </nav>
          <div>
            <h2></h2>
            <p class="heading-address">${info}</p>
            <p class="heading-address">
              (${address})
            </p>
          </div>
          <button class="btn-order">Order now</button>
      </footer>
    `;
  }
  socialMediaHTML(socialMedia) {
    return socialMedia
      .map(item => {
        return `<li class="social-link"><i class="fab fa-${item}"></i></li>`;
      })
      .join('\n');
  }
}

export default new FooterView();
