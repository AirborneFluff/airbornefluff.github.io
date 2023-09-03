import {Component, OnInit} from '@angular/core';
import {ThemingService} from "./core/theming/theming.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';


  constructor(private theme: ThemingService) {
  }
  ngOnInit(): void {
    console.log()
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth"});
  }
}
