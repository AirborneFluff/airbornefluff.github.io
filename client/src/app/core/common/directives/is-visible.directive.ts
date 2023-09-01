import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective implements AfterViewInit {
  @Input() delay: number = 0;
  @Input() persistent: boolean = false;
  private _rendered: boolean = false;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observedElement = this.el.nativeElement.parentElement

    const observer = new IntersectionObserver(([entry]) => {
      this.renderContents(entry.isIntersecting)
    }, { threshold: 0.5 })
    observer.observe(observedElement)
  }
  renderContents(isIntersecting: boolean) {
    if (this.persistent && this._rendered) return;

    this.el.nativeElement.style.display = 'none';
    this._rendered = false;

    if (isIntersecting) {
      setTimeout(() => {
        this.el.nativeElement.style.display = '';
        this._rendered = true;
      }, this.delay)
    }
  }
}
