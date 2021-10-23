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
          <button data-bowl-index="${i}" class="cart-item-remove">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      `;
      })
      .join('\n');
  }

  addRemoveItemHandler(handler) {
    document
      .querySelector('.view-current-cart')
      .addEventListener('click', function (e) {
        const btn = e.target.closest('.cart-item-remove');
        if (!btn) return;
        handler(btn.dataset.bowlIndex);
      });
  }
}

export default new CartView();
