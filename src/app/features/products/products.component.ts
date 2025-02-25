import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { IProduct, IProductsResponse } from '@core/interfaces/IProduct';
import { ProductsService } from '@core/services/products.service';
import { SortingType } from '@core/types/sorting.type';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private destroyRef: DestroyRef = inject(DestroyRef);

  products: IProduct[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  sortOption: SortingType = 'none';
  loading: boolean = false;
  productsSortControl: FormControl<SortingType> = new FormControl('none', {nonNullable: true});
  resource: 'products' | 'books' = 'products';


  constructor(private productsService: ProductsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log('this.route.snapshot.data[\'resource\']', this.route.snapshot.data['resource'])
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
