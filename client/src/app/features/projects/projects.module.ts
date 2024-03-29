import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatingAppComponent } from './dating-app/dating-app.component';
import { ProjectShowcaseModule } from "../project-showcase/project-showcase.module";
import { EnergyStorageAppComponent } from './energy-storage-app/energy-storage-app.component';
import { StockAppComponent } from './stock-app/stock-app.component';
import { RaffleAppComponent } from './raffle-app/raffle-app.component';



@NgModule({
  declarations: [
    DatingAppComponent,
    EnergyStorageAppComponent,
    StockAppComponent,
    RaffleAppComponent
  ],
  exports: [
    DatingAppComponent,
    EnergyStorageAppComponent,
    StockAppComponent,
    RaffleAppComponent
  ],
  imports: [
    CommonModule,
    ProjectShowcaseModule
  ]
})
export class ProjectsModule { }
