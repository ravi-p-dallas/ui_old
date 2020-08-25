import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store';
import { plainToClass } from 'class-transformer';
import { CartItem } from '../model/CartItem';

@Module({ dynamic: true, store, name: 'CartStore' })
export default class CartStore extends VuexModule {
  private items = new Array<CartItem>();;

  @Mutation
  private updateCart(cartItem: CartItem) {
    this.items.push(cartItem);
    console.log(': Cart Change Mutation');
  }

  public get cartItems() {
    console.log(': Cart Get');
    return this.items;
  }

  public get cartCount() {
    return this.items.length;
  }

  @Action
  public addToCart(item: object) {

    const cartItem = plainToClass(CartItem, item);
    this.context.commit('updateCart', cartItem);
    console.log(': Cart Change Action');
  }
}
