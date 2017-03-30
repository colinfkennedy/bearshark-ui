import {OnInit, Component, Input, OnChanges} from '@angular/core';
import 'rxjs/add/operator/switchMap';

import { Segment } from './segment';

@Component({
  selector: 'bearshark-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: [ './search-details.component.css' ]
})
export class SearchDetailsComponent implements OnInit, OnChanges {
  @Input() segment: Segment;

  pieType: string = 'pie';
  pieData: any;
  pieOptions: any;
  lineType: string = 'line';
  lineData: any;
  lineOptions: any;
  barType: string = 'horizontalBar';
  barData: any;
  barOptions: any;
  radarType: string = 'radar';
  radarData: any;
  radarOptions: any;

  ngOnInit(): void {
    this.createGraphData();
  }

  ngOnChanges(): void {

  }

  private createGraphData() {
    this.createPieChart();
    this.createLineChart();
    this.createBarChart();
    this.createRadarChart();
  }

  createPieChart() {
    this.pieData = {
      labels: [
        'Desktop',
        'Mobile'
      ],
      datasets: [
        {
          data: [300, 700],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
    };
    this.pieOptions = {
      animation: {
        animateScale: true
      },
      responsive: true,
        title: {
        display: true,
          text: 'Inventory Availability'
      }
    };
  }

  createLineChart() {
    this.lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Revenue',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [20, 59, 65, 78, 72, 85, 90],
          spanGaps: false,
        }
      ]
    };
    this.lineOptions = {
      responsive: true,
      title: {
        display: true,
        text: 'Revenue Trend'
      }
    };
  }

  createBarChart() {
    this.barData = {
      labels: ['GM Amnet', 'Best Buy', 'Progressive', 'Statefarm'],
      datasets: [{
        label: 'Campaign Revenue $M',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    };
    this.barOptions = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      responsive: true,
      title: {
        display: true,
        text: 'Recent Customers'
      }
    };
  }

  createRadarChart() {
   this.radarData = {
      labels: ['Click', 'Conversion', 'Video Complete', 'Impression', 'Something Else', 'Other', 'Thing'],
      datasets: [
         {
           label: 'Mobile',
           backgroundColor: 'rgba(179,181,198,0.2)',
           borderColor: 'rgba(179,181,198,1)',
           pointBackgroundColor: 'rgba(179,181,198,1)',
           pointBorderColor: '#fff',
           pointHoverBackgroundColor: '#fff',
           pointHoverBorderColor: 'rgba(179,181,198,1)',
           data: [65, 59, 90, 81, 56, 55, 40]
         },
         {
           label: 'Desktop',
           backgroundColor: 'rgba(255,99,132,0.2)',
           borderColor: 'rgba(255,99,132,1)',
           pointBackgroundColor: 'rgba(255,99,132,1)',
           pointBorderColor: '#fff',
           pointHoverBackgroundColor: '#fff',
           pointHoverBorderColor: 'rgba(255,99,132,1)',
           data: [28, 48, 40, 19, 96, 27, 100]
         }
     ]
   };
   this.radarOptions = {
     responsive: true,
     title: {
       display: true,
       text: 'Estimate Cost Per'
     }
   };
  }
}
