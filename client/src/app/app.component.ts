import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('dev') devSection!: ElementRef;

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
