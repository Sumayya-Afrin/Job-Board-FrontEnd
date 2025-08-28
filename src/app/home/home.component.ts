import { Component } from '@angular/core';
import { AboutPageComponent } from "../about-page/about-page.component";
import { ContactPageComponent } from "../contact-page/contact-page.component";

@Component({
  selector: 'app-home',
  imports: [AboutPageComponent, ContactPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
