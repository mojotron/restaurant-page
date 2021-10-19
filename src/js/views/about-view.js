class AboutView {
  createMarkup(text) {
    return `
      <main class="about">
        <h2>Our Story</h2>
        <p>
          ${text}
        </p>
      </main>
    `;
  }
}

export default new AboutView();
