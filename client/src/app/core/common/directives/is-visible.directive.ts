import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective implements AfterViewInit {
  @Input() delay: number = 0;
  @Input() persistent: boolean = true;
  @Input() stayHidden: boolean = false
  private _rendered: boolean = false;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observedElement = this.el.nativeElement.parentElement
    this.el.nativeElement.style.visibility = 'hidden';
    this.persistent = this.stayHidden ? false : this.persistent;

    const observer = new IntersectionObserver(([entry]) => {
      this.renderContents(entry.isIntersecting)
    }, { threshold: 0.5 })
    observer.observe(observedElement)
  }
  renderContents(isIntersecting: boolean) {
    if (this.persistent && this._rendered) return;

    this.el.nativeElement.style.visibility = 'hidden';

    if (this._rendered && this.stayHidden) return;

    this._rendered = false;

    if (isIntersecting) {
      setTimeout(() => {
        this.resetAnimation();
        this.el.nativeElement.style.visibility = null;
        this._rendered = true;
      }, this.delay)
    }
  }

  resetAnimation() {
    this.el.nativeElement.style.animation = 'none';
    this.el.nativeElement.offsetHeight; // Trigger Reflow
    this.el.nativeElement.style.animation = null;
  }
}
