import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { InfoComponent } from '../../components/info/info.component';
import { ProductsComponent } from '../../components/products/products.component';
import { OrderComponent } from '../../components/order/order.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, InfoComponent, ProductsComponent, OrderComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
