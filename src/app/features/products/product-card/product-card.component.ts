// Angular Core imports
import { Component, Input } from '@angular/core';

// Interfaces & Types
import { IProduct } from '@core/interfaces/IProduct';
import { ProductItem } from '@core/types/product.type';
import { IBook } from '@core/interfaces/IBook';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() item!: ProductItem;

  get displayTitle(): string {
    if ((this.item as IProduct).name) {
      return (this.item as IProduct).name;
    }
    return (this.item as IBook).title;
  }

  get displayPrice(): number | null {
    return (this.item as IProduct).price || null;
  }
}
