import { AfterViewInit, Directive, ElementRef, EventEmitter, Output, ContentChildren, QueryList, Input } from '@angular/core';
import { Observable, Subject, concatMap, of, take } from 'rxjs';
import { AnimateHiddenDirective } from './animate-hidden.directive';

@Directive({
  selector: '[visibleTrigger]'
})
export class VisibleTriggerDirective implements AfterViewInit {
  private _triggered = false;
  @Input() multi: boolean = false;
  @Output() trigger: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ContentChildren(AnimateHiddenDirective, {descendants: true}) children!: QueryList<AnimateHiddenDirective>;

  private observableQueue: Observable<any>[] = [];
  private queueSubject$ = new Subject<void>();

  constructor(private el: ElementRef) { 
    this.trigger.subscribe((visible) => {
        if (!visible) return;
        this.children.forEach(child => {
          this.observableQueue.push(child.getRenderObservable());
        })
        this.queueSubject$.next();
    })

    this.queueSubject$.pipe(
      concatMap(() => {
        if (this.observableQueue.length > 0) {
          return this.observableQueue.shift()!.pipe(take(1));
        }
        return of();
      })
    ).subscribe(() => {
      this.queueSubject$.next();
    });
  }

  ngAfterViewInit(): void {
    const observedElement = this.el.nativeElement;

    const observer = new IntersectionObserver(([entry]) => {
      if (!this.multi && this._triggered) return;
      if (!this._triggered) this._triggered = entry.isIntersecting;

      this.trigger.next(entry.isIntersecting);
    }, { threshold: 0, rootMargin: '24px 0px -24px 0px' })
    observer.observe(observedElement)
  }
}
