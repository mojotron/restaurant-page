class OrderFormView {
  createMarkup(bowls, totalPrice) {
    return `
      <form class="order-form">
        <div class="order-cart">
        <h2>Order Ramen <i class="fas fa-shopping-cart"></i></h2>
          <p><span class="order-total-price">${totalPrice}</span>€</p>
          <button id="btn-view-cart">View cart</button>
        </div>
        <ul>
          ${this.createBowlListItemMarkup(bowls)}
        </ul>
        <label for="order-name">Customer Name</label>
        <input required type="text" id="order-name" placeholder="John Dow" />
        <label for="order-phone">Phone number</label>
        <input required type="text" id="order-phone" placeholder="123 456 789" />
        <label for="order-email">Email</label>
        <input required type="text" id="order-email" placeholder="example@mail.com" />
        <label for="order-address">Delivery Address</label>
        <input
          required
          type="text"
          id="order-address"
          placeholder="Street, number, floor, apartment"
        />
        <label for="order-payment">Payment</label>
        <select>
          <option>-- payment method --</option>
          <option value="">cash on delivery</option>
          <option value="">bank card</option>
          <option value="">coupon</option>
        </select>
        <button id="btn-finish-order">Submit</button>
      </form>
    `;
  }

  createBowlListItemMarkup(data) {
    return data
      .map(item => {
        return `
        <li class="order-item">
          <span>${item.title} Ramen ${item.price}€</span>
          <button class="btn-order-item" data-order-item="${item.title}">
            <i class="fas fa-cart-arrow-down"></i>
          </button>
        </li>
      `;
      })
      .join('\n');
  }

  addItemToCardHandler(handler) {
    document
      .querySelector('.order-form ul')
      .addEventListener('click', function (e) {
        e.preventDefault(); //button in form
        const btn = e.target.closest('.btn-order-item');
        if (!btn) return;
        handler(btn.dataset.orderItem);
      });
  }

  addViewCartHandler(handler) {
    document
      .querySelector('#btn-view-cart')
      .addEventListener('click', function (e) {
        e.preventDefault();
        handler();
      });
  }

  addSubmitOrderHandler(handler) {
    document
      .getElementById('btn-finish-order')
      .addEventListener('click', function (e) {
        handler();
      });
  }

  updateTotalPriceMarkup(value) {
    document.querySelector('.order-total-price').textContent = value.toFixed(2);
  }
}

export default new OrderFormView();
