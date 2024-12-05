import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../Components/card/card.component';
import { CartService } from '../../Services/cartService';
import { CartComponent } from '../../Components/cart/cart.component';
import { CartItem } from '../../Interfaces/cartItem';
import { Product } from '../../Interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  cartItems: CartItem[] = [];
  products: Product[] = [
    {
      description: 'Description 1',
      image: 'https://via.placeholder.com/150',
      price: 100,
      name: 'Product 1',
      id: 1,
      Stock: 10,
    },
    {
      description: 'Description 2',
      image: 'https://via.placeholder.com/150',
      price: 200,
      name: 'Product 2',
      id: 2,
      Stock: 10,
    },
    {
      description: 'Description 3',
      image: 'https://via.placeholder.com/150',
      price: 300,
      name: 'Product 3',
      id: 3,
      Stock: 5,
    },
  ];
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.cartService.itemAdded.subscribe((itemId: number) => {
      const product = this.products.find((p) => p.id === itemId);
      if (product && product.Stock > 0) {
        product.Stock--;
      }
    });

    this.cartService.clearCartItems.subscribe((items: CartItem[]) => {
      items.forEach((item) => {
        const product = this.products.find((p) => p.id === item.id);
        if (product) {
          product.Stock += item.quantity;
        }
      });
    });
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  getNumberOfItems() {
    return this.cartService.getTotalQuantity();
  }

  onAddToCart(product: Product) {
    this.cartService.addItem(product);
    this.cartItems = this.cartService.getItems(); // Update the cart items
  }
}
