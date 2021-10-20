class OrderFormView {
  createMarkup(order) {
    return `
      <div class="order-form">
        <div class="order-cart">
          <h2>Order Ramen</h2>
          <i class="fas fa-shopping-cart"></i>
          <p>0</p>
          <button id="btn-view-cart">View cart</button>
        </div>
        <ul>
          <li class="order-item">
            <span>Bowl of Miso Ramen</span>
            <button class="btn-order-item">
              <i class="fas fa-cart-arrow-down"></i>
            </button>
          </li>
          <li class="order-item">
            <span>Bowl of Miso Ramen</span>
            <button class="btn-order-item">
              <i class="fas fa-cart-arrow-down"></i>
            </button>
          </li>
          <li class="order-item">
            <span>Bowl of Miso Ramen</span>
            <button class="btn-order-item">
              <i class="fas fa-cart-arrow-down"></i>
            </button>
          </li>
        </ul>
        <label for="order-name">Customer Name</label>
        <input type="text" id="order-name" placeholder="John Dow" />
        <label for="order-phone">Phone number</label>
        <input type="text" id="order-phone" placeholder="123 456 789" />
        <label for="order-email">Email</label>
        <input type="text" id="order-email" placeholder="example@mail.com" />
        <label for="order-address">Delivery Address</label>
        <input
          type="text"
          id="order-address"
          placeholder="Street, number, floor, apartment"
        />
        <label for="order-paymant">Payment</label>
        <select>
          <option>-- payment method --</option>
          <option value="">cash on delivery</option>
          <option value="">bank card</option>
          <option value="">coupon</option>
        </select>
        <button id="btn-finish-order">Order</button>
      </div>
    `;
  }

  createBowlsListMarkup(order) {
    return order.map(item => {}).join('\n');
  }

  addToCartClickHandler(handler) {}
}

export default new OrderFormView();
