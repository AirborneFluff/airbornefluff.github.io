import { Directive, Renderer2, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[animateHidden]'
})
export class AnimateHiddenDirective implements AfterViewInit {
  private _hidden = false;
  @Input() delay = 0;
  
  constructor(private renderer: Renderer2, private el: ElementRef) { }
  
  ngAfterViewInit() {
    this.hide();
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

  private hide() {
    this.renderer.setStyle(this.el.nativeElement, 'visibility', 'hidden');
    this._hidden = true;
  }

  private show() {
    this.renderer.removeStyle(this.el.nativeElement, 'visibility');
    this._hidden = false;
  }

  resetAnimation() {
    this.renderer.setStyle(this.el.nativeElement, 'animation-fill-mode', 'forwards');

    this.el.nativeElement.style.animation = 'none';
    this.el.nativeElement.offsetHeight; // Trigger Reflow
    this.el.nativeElement.style.animation = null;
  }

}
