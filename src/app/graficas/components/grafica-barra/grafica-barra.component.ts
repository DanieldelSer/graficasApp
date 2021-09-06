import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true
  };

  @Input() public barChartLabels: Label[] = [
    // '2006', '2007', '2008', '2009', '2010', '2011', '2012'
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() public barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#EDD03E', hoverBackgroundColor: '#EDD03E' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#E0A846', hoverBackgroundColor: '#E0A846' },
    // { data: [34, 54, 55, 81, 86, 99, 87], label: 'Series C', backgroundColor: '#ED7E3E', hoverBackgroundColor: '#ED7E3E' }
  ];


  constructor() { }

  ngOnInit(): void {
    if ( this.horizontal ) {
      this.barChartType = 'horizontalBar'
    }
  }

}
