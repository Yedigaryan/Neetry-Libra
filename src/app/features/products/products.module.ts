// Angular Core imports
import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

// Feature Components
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [ProductsComponent, ProductCardComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProductsRoutingModule,
        NgOptimizedImage
    ]
})
export class ProductsModule { }
