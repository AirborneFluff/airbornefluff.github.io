import {Component, OnInit} from '@angular/core';
import {ThemingService} from "./core/theming/theming.service";
import {DialogService} from "./core/dialog/dialog.service";
import {TestModalComponent} from "./features/test-modal/test-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';


  constructor(public dialog: DialogService) {
  }
  ngOnInit(): void {
    console.log()
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth"});
  }

  protected readonly TestModalComponent = TestModalComponent;
}
