import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToggleThemeComponent } from "./core/theming/toggle-theme/toggle-theme.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IsVisibleDirective } from './core/common/directives/is-visible.directive';
import { ScrollIndicatorComponent } from './core/components/scroll-indicator/scroll-indicator.component';
import { MatIconModule } from "@angular/material/icon";
import { TestModalComponent } from './features/test-modal/test-modal.component';
import { BlockTextComponent } from './core/components/block-text/block-text.component';
import { TextChipComponent } from './core/components/text-chip/text-chip.component';
import { TabsModule } from "./features/tabs/tabs.module";
import {ProjectShowcaseModule} from "./features/project-showcase/project-showcase.module";
import {ProjectsModule} from "./features/projects/projects.module";
import { VisibleTriggerDirective } from './core/common/directives/visible-trigger.directive';
import { AnimateHiddenDirective } from './core/common/directives/animate-hidden.directive';

@NgModule({
  declarations: [
    AppComponent,
    IsVisibleDirective,
    ScrollIndicatorComponent,
    IsVisibleDirective,
    TestModalComponent,
    BlockTextComponent,
    TextChipComponent,
    VisibleTriggerDirective,
    AnimateHiddenDirective
  ],
    imports: [
        BrowserModule,
        ToggleThemeComponent,
        BrowserAnimationsModule,
        MatIconModule,
        TabsModule,
        ProjectShowcaseModule,
        ProjectsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
