// Angular Core imports
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

// Services
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  logout() {
    this.authService.logout();
    this.router.navigate(['login'], {replaceUrl: true});
  }
}
