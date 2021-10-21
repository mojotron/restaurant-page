import { faCreativeCommonsPd } from '@fortawesome/free-brands-svg-icons';

export const state = {
  order: {
    totalPrice: 0,
    cart: [],
  },
  restaurantName: 'mojo ramen',
  address: 'Ul. Vice Vukova 6, 10020, Zagreb, Croatia',
  info: 'Arena Centar Mall, inside food court',
  socialMedia: ['instagram', 'twitter', 'facebook'],
  aboutStory: `
    While traveling through south-east asia I have eat a lot of great
    dishes. But one bowl of ramen in Singapore food court mesmerized me.
    Then and there i started my journey to master cooking ramen, and after 6
    years of learning and mastering i returned home and open my own small
    restaurant here in zagreb. Our goal is simple, cooking a bowl of ramen
    to inspire you to do greatness.
  `,
  recipes: [
    {
      title: 'Miso',
      price: 7.99,
      toppings: [
        'Chashu – braised pork belly',
        'Ramen Egg (Ajitsuke Tamago)',
        'Shiraga Negi',
        'Sweet corn kernels',
        'Chopped green onion',
        'Nori seaweed',
      ],
    },
    {
      title: 'Shoyu',
      price: 8.99,
      toppings: [
        'Chicken dashi',
        'Reserved shiitake mushrooms',
        'Ramen Egg (Ajitsuke Tamago)',
        'Tare',
        'Slices chashu',
        'Nitamago',
        'Green onion',
        'La-yu',
        'Nori',
      ],
    },
    {
      title: 'Vegan',
      price: 6.99,
      toppings: [
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
      ],
    },
    {
      title: 'Spicy',
      price: 7.59,
      toppings: [
        'Sliced jalapeno papers',
        'Fresh garlic',
        'Fresh ginger',
        'Gochujang',
        'Chili crisp',
        'Shrimp',
        'Ramen Egg (Ajitsuke Tamago)',
        'Chashu – braised pork belly',
      ],
    },
  ],
};
