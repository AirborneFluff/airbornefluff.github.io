import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToggleThemeComponent } from "./core/theming/toggle-theme/toggle-theme.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IsVisibleDirective } from './core/common/directives/is-visible.directive';
import { ScrollIndicatorComponent } from './core/components/scroll-indicator/scroll-indicator.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    IsVisibleDirective,
    ScrollIndicatorComponent,
    IsVisibleDirective
  ],
  imports: [
    BrowserModule,
    ToggleThemeComponent,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
