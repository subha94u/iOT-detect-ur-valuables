import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './chartbar-chart.component.html',
  styleUrls: ['./chartbar-chart.component.scss']
})
export class ChartbarChartComponent implements OnInit {
  public title = 'Population (in millions)';
  type = 'BarChart';
  public data = [
    ["2012", 900],
    ["2013", 1000],
    ["2014", 1170],
    ["2015", 1250],
    ["2016", 1530]
  ];
  public columnNames = ['Year', 'Asia'];
  public options = { };
  public width = 550;
  public height = 400;
  constructor() { }

  ngOnInit(): void {

  }


}
