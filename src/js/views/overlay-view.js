class OverlayView {
  createMarkup() {
    return `<div class="overlay"></div>`;
  }

  addOverlayHandler(handler) {
    document.querySelector('.overlay').addEventListener('click', handler);
  }
}

export default new OverlayView();
