import { faCreativeCommonsPd } from '@fortawesome/free-brands-svg-icons';
import { bowlsArray } from './bowl-item-class';

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
  recipes: bowlsArray,
};
