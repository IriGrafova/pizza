import { Injectable } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { Product } from '../models/product.interface';
import { PRODUCTS_MOCK } from '../mocks/products.mock';
import { Order } from '../models/order.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getProducts(): Observable<Product[]> {
    return of(PRODUCTS_MOCK);
  }

  private getOrders(): Observable<Order[]> {
    const orders = this.getOrdersFromStorage();
    return of(orders);
  }

  addOrder(order: Order): Observable<Order> {
    this.getOrders()
      .pipe(take(1))
      .subscribe((orders) => {
        orders.unshift(order);
        localStorage.setItem('orders', JSON.stringify(orders));
      });

    return of(order);
  }

  private getOrdersFromStorage(): Order[] {
    const stored = localStorage.getItem('orders');
    if (!stored) {
      return [];
    }

    return JSON.parse(stored);
  }
}
