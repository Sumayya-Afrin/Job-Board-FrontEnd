import { Component } from '@angular/core';
import { ContactPageComponent } from "../contact-page/contact-page.component";

@Component({
  selector: 'app-about-page',
  imports: [ContactPageComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

}
