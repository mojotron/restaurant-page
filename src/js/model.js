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
    While traveling through south-east Asia, I have eaten many great
    dishes. But one bowl of ramen in Singapore food court mesmerized me.
    Then and there I started my journey to master cooking ramen. After 6
    years of learning and mastering, I returned home and opened my own small
    restaurant here in Zagreb. Our goal is simple, preparing a bowl of ramen
    that will inspire you to do greatness.
  `,
  recipes: bowlsArray,
};
