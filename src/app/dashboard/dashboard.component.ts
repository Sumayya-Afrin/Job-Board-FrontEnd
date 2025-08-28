import { Component } from '@angular/core';
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-dashboard',
  imports: [SearchBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
