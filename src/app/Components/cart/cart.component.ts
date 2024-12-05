import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../Interfaces/cartItem';
import { CartService } from '../../Services/cartService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  @Input({
    required: true,
  })
  cartItems!: CartItem[];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  getTotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }

  getItems(): CartItem[] {
    return this.cartService.getItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }

  checkout(): void {
    // this.clearCart();
    this.router.navigate(['/checkout']);
  }
}
