import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.interface';
import { FsLightbox } from 'fslightbox-angular/16-19';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FsLightbox],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product!: Product;

  toggler = false;
  sources: string[] = [];

  openProduct(image: string) {
    this.sources = [image];
    this.toggler = !this.toggler;
  }
}
