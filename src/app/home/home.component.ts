import { Component } from '@angular/core';
import { AboutPageComponent } from "../about-page/about-page.component";
import { ContactPageComponent } from "../contact-page/contact-page.component";
import { PlatformStatsComponent } from "../platform-stats/platform-stats.component";
import { NewsletterSignupComponent } from "../newsletter-signup/newsletter-signup.component";

@Component({
  selector: 'app-home',
  imports: [AboutPageComponent, ContactPageComponent, PlatformStatsComponent, NewsletterSignupComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
