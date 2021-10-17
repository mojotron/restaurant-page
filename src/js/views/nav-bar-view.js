class NavBarView {
  createMarkup() {
    return `
      <nav class="nav-bar">
        <a href="#"><figure data-page="home" class="logo link"></figure></a>
        <ul class="nav-bar-list">
          <li data-page="about" class="nav-list-item link">about</li>
          <li data-page="menu" class="nav-list-item link">menu</li>
          <li data-page="location" class="nav-list-item link">location</li>
        </ul>
        <button data-page="order" class="btn-order link">Order now</button>
      </nav>
    `;
  }

  addHandlerClick(handler) {
    document.querySelector('.nav-bar').addEventListener('click', function (e) {
      const target = e.target.closest('.link');
      if (!target) return;
      alert(e.target.dataset.page);
    });
  }
}

export default new NavBarView();
