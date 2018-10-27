import { Component, OnInit } from '@angular/core';

import { OrderCompleteness} from './orderCompleteness';
import { OrderCompletenessService } from './-order-completeness.service';


@Component({
  selector: 'app-order-completeness-summary',
  templateUrl: './order-completeness-summary.component.html',
  styleUrls: ['./order-completeness-summary.component.css']
})
export class OrderCompletenessSummaryComponent implements OnInit {

    orderCompletenessList: OrderCompleteness[];

    constructor(private orderCompletenessService: OrderCompletenessService) { }

    ngOnInit() {
        this.getOrderCompleteness();
    }

    getOrderCompleteness(): void {
        this.orderCompletenessService.getOrderCompleteness()
        .subscribe(data => this.orderCompletenessList = data);
    }
}
