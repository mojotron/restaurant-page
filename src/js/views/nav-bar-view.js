class NavBarView {
  getHtml() {
    return `
      <nav class="nav-bar">
        <a href="#"><figure class="logo"></figure></a>
        <ul class="nav-bar-list">
          <li class="nav-list-item">home</li>
          <li class="nav-list-item">menu</li>
          <li class="nav-list-item">contact</li>
        </ul>
        <button class="btn-order">Order now</button>
      </nav>
    `;
  }
}

export default new NavBarView();
