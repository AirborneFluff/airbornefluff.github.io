import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ContentChildren, ElementRef,
  Input, OnDestroy,
  QueryList,
  TemplateRef, ViewChild
} from '@angular/core';
import { TabComponent } from "../tab/tab.component";
import { BehaviorSubject, Subject, Subscription, switchMap, tap } from "rxjs";

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements AfterViewInit, OnDestroy {
  private _tabIndex: number = 0;
  @Input()
  set tabIndex(val: number) {
    if (val < 0) val = 0;
    this._tabIndex = val;
  }
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  @ViewChild('tabContainer') tabContainer!: ElementRef;

  selectedTab$: Subject<TabComponent> = new Subject<TabComponent>();
  tabContent$: Subject<TemplateRef<any>> = new Subject<TemplateRef<any>>();
  isScroll$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  subscriptions: Subscription = new Subscription();

  constructor(private changeDetection: ChangeDetectorRef) {
    this.subscriptions.add(this.selectedTab$.pipe(
      switchMap(tab => tab.tabInit$),
      tap(content => this.tabContent$.next(content))).subscribe());
  }

  ngAfterViewInit(): void {
    if (this.tabs.length < this._tabIndex + 1) this._tabIndex = 0;

    let index = 0;
    this.tabs.forEach(tab => {
      if (this._tabIndex == index++) this.switchTab(tab);
    });

    this.isScroll$.next(this.isContainerScroll(this.tabContainer.nativeElement));
    this.changeDetection.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  switchTab(next: TabComponent) {
    this.selectedTab$.next(next);
  }

  private isContainerScroll(el: HTMLElement) {
    return el.scrollWidth > el.offsetWidth;
  }

  scrollTo(el: HTMLElement) {
    const childRect = el.getBoundingClientRect();
    const parentRect = this.tabContainer.nativeElement.getBoundingClientRect();
    const scrollLeft = childRect.left - parentRect.left;

    this.scrollTabs(scrollLeft)
  }

  scrollBack() {
    const scrollAmount = this.tabContainer.nativeElement.clientWidth / 4;
    this.scrollTabs(-scrollAmount);
  }

  scrollForwards() {
    const scrollAmount = this.tabContainer.nativeElement.clientWidth / 4;
    this.scrollTabs(scrollAmount);
  }

  private scrollTabs(left: number) {
    this.tabContainer.nativeElement.scrollBy({
      left: left,
      behavior: 'smooth'
    });
  }
}
