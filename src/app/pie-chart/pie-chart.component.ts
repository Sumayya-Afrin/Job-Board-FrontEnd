import { Component, OnInit } from '@angular/core';
import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  imports: [CanvasJSAngularChartsModule],
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  chartOptions = {
    animationEnabled: true,
    theme: 'light2', // or "dark1", "dark2"
    exportEnabled: true,
    title: {
      text: '',
    },
    subtitles: [
      {
        text: 'Applications/Month',
      },
    ],
    data: [
      {
        type: 'pie', // Change to "column", "line", etc.
        indexLabel: '{name}: {y}%',
        dataPoints: [
          { name: 'January', y: 9.1 },
          { name: 'February', y: 3.7 },
          { name: 'March', y: 36.4 },
          { name: 'April', y: 30.7 },
          { name: 'May', y: 20.1 },
        ],
      },
    ],
  };
}
