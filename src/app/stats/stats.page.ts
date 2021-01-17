import { Component, OnInit ,ViewChild } from '@angular/core';
import { ChartDataSets ,Chart} from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {


  @ViewChild('barChart') barChart;
  bars: any;
  colorArray: any;

  constructor() { }




  


  ionViewDidEnter() {
    this.createBarChart();
  }


  ngOnInit() {
  }


  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Tahmini verimli çalışma puanı',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: '#df9aff', // array should have same number of elements as number of dataset
          borderColor: '#df9aff',// array should have same number of elements as number of dataset
          borderWidth: 3
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }


 

}
