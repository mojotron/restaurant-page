class BowlItem {
  constructor(title, price, toppings) {
    this.title = title;
    this.price = price;
    this.toppings = toppings;
  }
}

const misoBowl = new BowlItem('Miso', 7.99, [
  'Chashu – braised pork belly',
  'Ramen Egg (Ajitsuke Tamago)',
  'Shiraga Negi',
  'Sweet corn kernels',
  'Chopped green onion',
  'Nori seaweed',
]);

const shoyuBowl = new BowlItem('Shoyu', 8.99, [
  'Chicken dashi',
  'Reserved shiitake mushrooms',
  'Ramen Egg (Ajitsuke Tamago)',
  'Tare',
  'Slices chashu',
  'Nitamago',
  'Green onion',
  'La-yu',
  'Nori',
]);

const veganBowl = new BowlItem('Vegan', 6.99, [
  'Garlic cloves',
  'Ginger',
  'White miso paste',
  'Neri goma (white sesame paste)',
  'Dried shiitake mushrooms',
  'Good-quality vegan stock',
  'Firm tofu',
  'Pak choi',
  'Spring onions',
  'Beansprouts',
  'Carrot',
  'Sesame oil',
  'Sriracha',
  'Coriander',
  'Peanuts',
  'Nori or dried chilli',
]);

const spicyBowl = new BowlItem('Spicy', 7.59, [
  'Sliced jalapeno papers',
  'Fresh garlic',
  'Fresh ginger',
  'Gochujang',
  'Chili crisp',
  'Shrimp',
  'Ramen Egg (Ajitsuke Tamago)',
  'Chashu – braised pork belly',
]);

export const bowlsArray = [misoBowl, shoyuBowl, veganBowl, spicyBowl];
