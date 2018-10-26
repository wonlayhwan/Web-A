import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-completeness-summary',
  templateUrl: './order-completeness-summary.component.html',
  styleUrls: ['./order-completeness-summary.component.css']
})
export class OrderCompletenessSummaryComponent implements OnInit {
  dataSet = [
    {
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key    : '2',
      name   : 'Jim Green',
      age    : 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key    : '3',
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }
}
