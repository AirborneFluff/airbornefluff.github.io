import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatingAppComponent } from './dating-app/dating-app.component';
import { ProjectShowcaseModule } from "../project-showcase/project-showcase.module";
import { EnergyStorageAppComponent } from './energy-storage-app/energy-storage-app.component';



@NgModule({
  declarations: [
    DatingAppComponent,
    EnergyStorageAppComponent
  ],
  exports: [
    DatingAppComponent,
    EnergyStorageAppComponent
  ],
  imports: [
    CommonModule,
    ProjectShowcaseModule
  ]
})
export class ProjectsModule { }
