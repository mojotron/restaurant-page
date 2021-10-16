class BowlView {
  createMarkup(data) {
    return `
      <section class="bowls-display">
        <h2 class="bowls-title">Ramen Bowls</h2>
        <div class="bowl-items-wrapper">
        ${data.map(bowl => this.bowlItemHTML(bowl)).join('\n')}
        </div>
      </section>  
    `;
  }
  bowlItemHTML(bowl) {
    return `
      <div class="bowl-item">
        <h2 class="bowl-item-title">${bowl.title}</h2>
        <p class="bowl-item-price">${bowl.price}€</p>
        <p class="bowl-toppings">Toppings:</p>
        <ul>
          ${this.toppingHTML(bowl.toppings)}
        </ul>
      </div>
    `;
  }

  toppingHTML(topping) {
    return topping
      .map(topping => {
        return `<li class="bowl-item-topping">${topping}</li>`;
      })
      .join('\n');
  }
}

export default new BowlView();
