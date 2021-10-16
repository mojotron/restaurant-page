class MainWrapperView {
  _parentElement = document.querySelector('.main-wrapper');

  renderHTML(html, position = 'afterbegin') {
    this._parentElement.insertAdjacentHTML(position, html);
  }
}

export default new MainWrapperView();
