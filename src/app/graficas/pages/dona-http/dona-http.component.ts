import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Colors, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Colors[] = [
    {
      backgroundColor: [
        '#63EBC2',
        '#7EADDB',
        '#9A7BE8',
        '#808DF2',
        '#6CE6F5'
      ]
    }
  ]

  constructor( private graficasService: GraficasService ) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales()
    // .subscribe( data => {
    //   console.log(data);
    //   const labels = Object.keys( data );
    //   const values = Object.values( data );
    //   console.log(labels);
    //   console.log(values);
    //   this.doughnutChartLabels = labels;
    //   this.doughnutChartData.push(values)
    //   // this.doughnutChartData = values;
    // } )

    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({ labels, values }) => {

        console.log(labels);
        console.log(values);

        this.doughnutChartLabels = labels;
        // this.doughnutChartData = values;
        this.doughnutChartData.push( values );

      } )

  }

}
