import { Injectable } from '@angular/core';
import { CartItem } from '../Interfaces/cartItem';
import { Product } from '../Interfaces/product';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  itemAdded = new EventEmitter<number>();
  clearCartItems = new EventEmitter<CartItem[]>();

  getItems(): CartItem[] {
    return this.cartItems;
  }

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }

  clearCart(): void {
    this.clearCartItems.emit(this.cartItems);
    this.cartItems = [];
  }

  addItem(item: Product): void {
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({
        id: item.id,
        productName: item.name,
        quantity: 1,
        price: item.price,
        image: item.image,
      });
    }
    this.itemAdded.emit(item.id);
  }
}
