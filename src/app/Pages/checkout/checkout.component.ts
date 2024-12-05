import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cartService';
import { CartItem } from '../../Interfaces/cartItem';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }

  completeTransaction() {
    this.cartService.clearCart();
    this.router.navigate(['/transaction-complete']);
  }

  getTotal(): number {
    return this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }
}
