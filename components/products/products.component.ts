import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';
import { ApiService } from '../../services/api.service';
import { take } from 'rxjs';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  private readonly apiService = inject(ApiService);
  products: Product[] = [];

  ngOnInit() {
    this.apiService.getProducts().pipe(take(1)).subscribe(products => {
      this.products = products;
    });
  }
}
