// Angular core imports
import { Component, OnInit } from '@angular/core';

// Application services
import { ProductsService } from '@core/services/products.service';
import { PersonsService } from '@core/services/persons.service';
import { UsersService } from '@core/services/users.service';

// Application interfaces
import { IPersonResponse } from '@core/interfaces/IPerson';
import { IProductsResponse } from '@core/interfaces/IProduct';
import { IUsersResponse } from '@core/interfaces/IUser';

// Components
import { DashboardWidgetComponent } from '../dashboard-widget/dashboard-widget.component';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrl: './dashboard-content.component.scss',
  imports: [
    DashboardWidgetComponent
  ],
  standalone: true
})
export class DashboardContentComponent implements OnInit {  totalUsers: number = 0;
  totalProducts: number = 0;
  totalPersons: number = 0;

  constructor(
    private usersService: UsersService,
    private productsService: ProductsService,
    private personsService: PersonsService) {
  }


  ngOnInit(): void {
    this.loadStatistics();
  }

  loadStatistics(): void {
    this.usersService.getUsers().subscribe((response: IUsersResponse): void => {
      this.totalUsers = response.total || response.data.length;
    });

    this.productsService.getProducts(1, 50, 'none').subscribe((response: IProductsResponse): void => {
      this.totalProducts = response.total || response.data.length;
    });

    this.personsService.getPersons().subscribe((response: IPersonResponse): void => {
      this.totalPersons = response.data.length;
    });
  }

}
