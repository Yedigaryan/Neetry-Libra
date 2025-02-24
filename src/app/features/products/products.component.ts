import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Product, ProductsResponse } from '@core/interfaces/product';
import { ProductsService } from '@core/services/products.service';
import { SortingType } from '@core/types/sorting.type';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private destroyRef: DestroyRef = inject(DestroyRef);

  products: Product[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  sortOption: SortingType = 'none';
  loading: boolean = false;
  productsSortControl: FormControl<SortingType> = new FormControl('none', {nonNullable: true});

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loadProducts();
    this.productsSortControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((search: SortingType) => {
      this.onSortChange(search)
    })
  }

  loadProducts(): void {
    this.loading = true;
    this.productsService.getProducts(this.currentPage, this.itemsPerPage, this.sortOption)
      .pipe(finalize(() => this.loading = false))
      .subscribe((response: ProductsResponse) => {
        this.products = this.products.concat(response.data);
        this.applySorting();
      });
  }

  applySorting(): void {
    if (this.sortOption === 'asc') {
      this.products.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.sortOption === 'desc') {
      this.products.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  onSortChange(sortValue: SortingType): void {
    this.sortOption = sortValue;
    this.applySorting();
  }

  showMore(): void {
    this.currentPage++;
    this.loadProducts();
  }

  canShowMore(): boolean {
    return this.products.length < 50;
  }
}
