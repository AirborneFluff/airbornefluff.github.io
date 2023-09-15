import {ElementRef, Injectable} from '@angular/core';
import {concatMap, Observable, of, Subject, take, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimationQueueService {
  private observableQueue: Observable<any>[] = [];
  private elementQueue: ElementRef[] = [];
  private queueSubject = new Subject<void>();
  constructor() {
    this.queueSubject.pipe(
      concatMap(() => {
        if (this.observableQueue.length > 0) {
          this.elementQueue.shift();
          return this.observableQueue.shift()!.pipe(take(1));
        }
        return of();
      })
    ).subscribe(() => {
      this.queueSubject.next();
    });
  }

  private startQueueProcessing() {
    if (this.observableQueue.length > 1) return;

    setTimeout(() => {
      this.queueSubject.next();
    }, 100)
  }

  public add(task: Observable<any>, element: ElementRef) {
    this.elementQueue.push(element);
    this.elementQueue.sort((a, b) => {
      return a.nativeElement.offsetTop - b.nativeElement.offsetTop;
    })

    const sortedIndex = this.elementQueue.indexOf(element);
    this.observableQueue.splice(sortedIndex, 0, task);

    this.startQueueProcessing();
  }
}
