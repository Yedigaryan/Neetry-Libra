import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { IProductsResponse } from '@core/interfaces/IProduct';
import { ProductsService } from '@core/services/products.service';
import { SortingType } from '@core/types/sorting.type';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductItem } from '@core/types/product.type';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private destroyRef: DestroyRef = inject(DestroyRef);

  products: ProductItem[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  sortOption: SortingType = 'none';
  loading: boolean = false;
  productsSortControl: FormControl<SortingType> = new FormControl('none', {nonNullable: true});
  resource: 'products' | 'books' = 'products';


  constructor(private productsService: ProductsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.resource = this.route.snapshot.data['resource'] || 'products';
    this.loadProducts();
    this.productsSortControl.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((search: SortingType) => {
      this.onSortChange(search)
    })
  }

  loadProducts(): void {
    this.loading = true;
    if (this.resource === 'books') {
      this.productsService.getBooks(this.currentPage, this.itemsPerPage, this.sortOption)
        .pipe(finalize(() => this.loading = false))
        .subscribe((response: IProductsResponse) => {
          this.products = this.products.concat(response.data);
          this.applySorting();
        });
    } else {
      this.productsService.getProducts(this.currentPage, this.itemsPerPage, this.sortOption)
        .pipe(finalize(() => this.loading = false))
        .subscribe((response: IProductsResponse) => {
          this.products = this.products.concat(response.data);
          this.applySorting();
        });
    }
  }

  applySorting(): void {
    if (this.sortOption === 'asc') {
      this.products.sort((a: ProductItem, b: ProductItem) => {
        const aValue: string = 'title' in a ? (a.title || '') : (a.name || '');
        const bValue: string = 'title' in b ? (b.title || '') : (b.name || '');
        return aValue.localeCompare(bValue);
      });
    } else if (this.sortOption === 'desc') {
      this.products.sort((a: ProductItem, b: ProductItem) => {
        const aValue: string = 'title' in a ? (a.title || '') : (a.name || '');
        const bValue: string = 'title' in b ? (b.title || '') : (b.name || '');
        return bValue.localeCompare(aValue);
      });
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
