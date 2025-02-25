import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardContentComponent
  ]
})
export class DashboardModule {
}
