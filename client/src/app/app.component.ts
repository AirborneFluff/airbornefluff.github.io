import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ThemingService} from "./core/theming/theming.service";
import {DialogService} from "./core/dialog/dialog.service";
import {TestModalComponent} from "./features/test-modal/test-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  @ViewChild('dev')
  set devSection(val: ElementRef) {
    this.scroll(val.nativeElement);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth"});
  }
}
