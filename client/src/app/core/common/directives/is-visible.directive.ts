import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {AnimationQueueService} from "../services/animation-queue.service";
import {Observable} from "rxjs";

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective implements AfterViewInit {
  private _hidden: boolean = false;
  @Input() delay: number = 0;
  @Input() skipQueue: boolean = false;
  constructor(private el: ElementRef, private renderer: Renderer2, private queue: AnimationQueueService) {}

  ngAfterViewInit() {
    const observedElement = this.el.nativeElement;
    this.hide();

    const observer = new IntersectionObserver(([entry]) => {
      if (!this._hidden) return;
      if (!entry.isIntersecting) return;
      this.queue.add(this.getRenderObservable(), this.skipQueue ? this.getSkipQueueElement() : this.el);
    }, { threshold: 0, rootMargin: '0px 0px -96px 0px' })
    observer.observe(observedElement)
  }

  getRenderObservable(): Observable<void> {
    return new Observable<void>(subscriber => {
      setTimeout(() => {
        this.show();
        this.resetAnimation();
        subscriber.next();
        subscriber.complete();
      }, this.delay)
    })
  }

  getSkipQueueElement(): ElementRef {
    return new ElementRef({offsetTop : 0});
  }

  private hide() {
    this.renderer.setStyle(this.el.nativeElement, 'visibility', 'hidden');
    this._hidden = true;
  }
  private show() {
    this.renderer.removeStyle(this.el.nativeElement, 'visibility');
    this._hidden = false;
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
