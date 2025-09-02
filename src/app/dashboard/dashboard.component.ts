import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterOutlet,
    RouterModule
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

  
}
