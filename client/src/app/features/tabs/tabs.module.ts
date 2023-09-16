import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabComponent } from './tab/tab.component';
import {ɵEmptyOutletComponent} from "@angular/router";



@NgModule({
    declarations: [
        TabGroupComponent,
        TabComponent
    ],
  exports: [
    TabGroupComponent,
    TabComponent
  ],
  imports: [
    CommonModule,
    ɵEmptyOutletComponent
  ]
})
export class TabsModule { }
