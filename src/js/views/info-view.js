class InfoView {
  createMarkup(address, info) {
    return `
      <p class="heading-address">${address}</p>
      <p class="heading-address">(${info})</p>
    `;
  }
}

export default new InfoView();
