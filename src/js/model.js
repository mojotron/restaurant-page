import { faCreativeCommonsPd } from '@fortawesome/free-brands-svg-icons';

export const state = {
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
        'chicken dashi',
        'reserved shiitake mushrooms',
        'Ramen Egg (Ajitsuke Tamago)',
        'tare',
        'slices chashu',
        'nitamago',
        'green onion',
        'la-yu',
        'Nori',
      ],
    },
    {
      title: 'Vegan',
      price: 6.99,
      toppings: [
        'garlic cloves',
        'ginger',
        'white miso paste',
        'neri goma (white sesame paste)',
        'dried shiitake mushrooms',
        'good-quality vegan stock',
        'firm tofu',
        'pak choi',
        'spring onions',
        'beansprouts',
        'carrot',
        'sesame oil',
        'sriracha',
        'coriander',
        'peanuts',
        'nori or dried chilli',
      ],
    },
    {
      title: 'Spicy',
      price: 7.5,
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
