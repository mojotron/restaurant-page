import infoView from './info-view.js';
class FooterView {
  createMarkup(socialMedia, info, address) {
    return `
      <footer class="footer">
          <nav>
            <ul class="social-icons">
              ${this.socialMediaHTML(socialMedia)}
            </ul>
          </nav>
          <div>
            <h2></h2>
            ${infoView.createMarkup(address, info)}
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
