// Angular Core imports
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-widget',
  templateUrl: './dashboard-widget.component.html',
  styleUrls: ['./dashboard-widget.component.scss'],
  standalone: true,
})
export class DashboardWidgetComponent {
  @Input() title: string = '';
  @Input() count: number = 0;
}
