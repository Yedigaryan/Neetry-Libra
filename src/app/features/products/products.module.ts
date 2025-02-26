// Angular core imports
import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Material imports
import { MatButton } from "@angular/material/button";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import { MatFormField, MatOption, MatSelect } from '@angular/material/select';
import { MatLabel } from '@angular/material/form-field';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

// Routing modules
import { ProductsRoutingModule } from './products-routing.module';

// Feature Components
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [ProductsComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    NgOptimizedImage,
    MatButton,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardImage,
    MatCardTitle,
    MatCardSubtitle,
    MatSelect,
    MatFormField,
    MatOption,
    MatLabel,
    MatProgressSpinner
  ]
})
export class ProductsModule { }
