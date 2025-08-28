import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { PieChartComponent } from "../pie-chart/pie-chart.component";

@Component({
  selector: 'app-dashboard',
  imports: [SearchBarComponent, PieChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
