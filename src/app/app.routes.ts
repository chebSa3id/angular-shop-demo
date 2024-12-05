import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { TransactionCompleteComponent } from './Pages/transaction-complete/transaction-complete.component';
import { CheckoutComponent } from './Pages/checkout/checkout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'transaction-complete',
    component: TransactionCompleteComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
];
