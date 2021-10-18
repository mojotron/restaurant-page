class MainWrapperView {
  _parentElement = document.querySelector('.main-wrapper');

  clear() {
    this._parentElement.innerHTML = '';
  }
  renderHTML(html, position = 'beforeend') {
    this._parentElement.insertAdjacentHTML(position, html);
  }

  swapAndRenderSection(elementSelector, html) {
    const element = document.querySelector(elementSelector);
    element.outerHTML = html;
  }
}

export default new MainWrapperView();
