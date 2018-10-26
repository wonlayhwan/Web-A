import { Component, OnInit, TemplateRef, ViewChild, NgModule } from '@angular/core';


@Component({
  selector: 'app-ant-layout',
  templateUrl: './ant-layout.component.html',
  styleUrls: ['./ant-layout.component.css']
})
export class AntLayoutComponent implements OnInit {

  isCollapsed = false;

  triggerTemplate = null;

  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  constructor() { }

  ngOnInit() {
  }

}
