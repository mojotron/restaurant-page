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

  removeElement(elementSelector) {
    const target = document.querySelector(elementSelector);
    target.remove();
  }

  elementExist(elementSelector) {
    return !!document.querySelector(elementSelector);
  }

  alertMessage(message) {
    alert(message);
  }
}

export default new MainWrapperView();
