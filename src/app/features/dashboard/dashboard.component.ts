// Angular Core imports
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

// Services
import { AuthService } from '@core/services/auth.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  currentTitle: string = 'Dashboard';

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.updateTitle(event.urlAfterRedirects);
    });
  }

  private updateTitle(url: string): void {
    if (url.includes('/users')) {
      this.currentTitle = 'Users';
    } else if (url.includes('/products')) {
      this.currentTitle = 'Products';
    } else if (url.includes('/books')) {
      this.currentTitle = 'Books';
    } else if (url.includes('/persons')) {
      this.currentTitle = 'Persons';
    } else {
      this.currentTitle = 'Dashboard';
    }
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['login'], {replaceUrl: true});
  }
}
