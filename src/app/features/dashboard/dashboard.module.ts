// Angular core imports
import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

// Routing modules
import { DashboardRoutingModule } from './dashboard-routing.module';

// Components
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { DashboardComponent } from './dashboard.component';

// Material imports
import { MatButton, MatIconAnchor, MatIconButton } from "@angular/material/button";
import { MatRipple } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardContentComponent,
    MatButton,
    MatIconAnchor,
    NgOptimizedImage,
    MatRipple,
    MatIconButton,
    MatIcon
  ]
})
export class DashboardModule {
}
