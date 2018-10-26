import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AntLayoutComponent } from './ant-layout/ant-layout.component';
import { NgZorroAntdModule , NZ_I18N, zh_CN} from 'ng-zorro-antd';
import { OrderCompletenessSummaryComponent } from './order-completeness-summary/order-completeness-summary.component';
import { RouterModule, Routes } from '@angular/router';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ReadyOrderMaterialsComponent } from './ready-order-materials/ready-order-materials.component';
import { CrossFeedingComponent } from './cross-feeding/cross-feeding.component';
registerLocaleData(zh);

const appRoutes = [
  { path: 'orderCompleteness', component: OrderCompletenessSummaryComponent } ,
  { path: 'readyOrderMaterials', component: ReadyOrderMaterialsComponent } ,
  { path: 'crossFeeding', component: CrossFeedingComponent } ,
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AntLayoutComponent,
    OrderCompletenessSummaryComponent,
    ReadyOrderMaterialsComponent,
    CrossFeedingComponent
  ],
  imports: [
    BrowserModule ,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    RouterModule.forRoot(
      appRoutes // ,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  /** 配置 ng-zorro-antd 国际化 **/
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
