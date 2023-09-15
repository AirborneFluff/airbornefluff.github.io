import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective implements AfterViewInit {
  private _hidden: boolean = false;
  @Input() delay: number = 0;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const observedElement = this.el.nativeElement;
    this.hide();

    const observer = new IntersectionObserver(([entry]) => {
      this.renderContents(entry.isIntersecting)
    }, { threshold: 0, rootMargin: '0px 0px 40px 0px' })
    observer.observe(observedElement)
  }
  renderContents(isIntersecting: boolean) {
    if (!this.hidden) return;

    if (isIntersecting) {
      setTimeout(() => {
        this.resetAnimation();
        this.show();
      }, this.delay)
    }
  }

  private hide() {
    this.renderer.setStyle(this.el.nativeElement, 'visibility', 'hidden');
    this._hidden = true;
  }
  private show() {
    this.renderer.removeStyle(this.el.nativeElement, 'visibility');
    this._hidden = false;
  }
  private get hidden(): boolean {
    return this._hidden;
  }

  resetAnimation() {
    this.renderer.setStyle(this.el.nativeElement, 'animation-fill-mode', 'forwards');

    this.el.nativeElement.style.animation = 'none';
    this.el.nativeElement.offsetHeight; // Trigger Reflow
    this.el.nativeElement.style.animation = null;
  }
}
