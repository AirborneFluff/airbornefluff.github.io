import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {ThemingService} from "./core/theming/theming.service";
import {Theme} from "./core/theming/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('dev') devSection!: ElementRef;

  constructor(private theme: ThemingService) {
    this.theme.setTheme(Theme.Dark);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth"});
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (!this.devSection?.nativeElement) return;
      this.scroll(this.devSection.nativeElement);
    })
  }
}
