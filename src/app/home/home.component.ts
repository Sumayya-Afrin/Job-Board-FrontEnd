import { Component } from '@angular/core';
import { AboutPageComponent } from "../about-page/about-page.component";

@Component({
  selector: 'app-home',
  imports: [AboutPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
