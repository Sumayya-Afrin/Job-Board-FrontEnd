import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  menuActive = false;
  toggleMenu() {
    console.log('hamburger is clicked');
    this.menuActive = !this.menuActive;
  }
  title = 'job-portal-fe';
}
