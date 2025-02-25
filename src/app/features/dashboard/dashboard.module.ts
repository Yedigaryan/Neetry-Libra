import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { DashboardComponent } from './dashboard.component';
import { MatButton, MatIconAnchor } from "@angular/material/button";
import { MatRipple } from '@angular/material/core';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardContentComponent,
    MatButton,
    MatIconAnchor,
    NgOptimizedImage,
    MatRipple
  ]
})
export class DashboardModule {
}
