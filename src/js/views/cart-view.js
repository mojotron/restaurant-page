class CartView {
  createMarkup(data) {
    return `
      <div class="view-current-cart">
        ${this.createCartItemsMarkup(data)}
      </div>
    `;
  }

  createCartItemsMarkup(data) {
    return data
      .map((item, i) => {
        return `
        <div class="cart-item">
          <p class="cart-item-info">
            <span class="cart-item-index">${i + 1}</span> ${
          item.title
        } Ramen <span>${item.price}</span>€
          </p>
          <button class="cart-item-remove">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      `;
      })
      .join('\n');
  }
}

export default new CartView();
