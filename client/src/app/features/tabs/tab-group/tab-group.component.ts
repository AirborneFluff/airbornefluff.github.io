import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ContentChildren,
  Input, OnDestroy,
  QueryList,
  TemplateRef
} from '@angular/core';
import { TabComponent } from "../tab/tab.component";
import { Subject, Subscription, switchMap, tap } from "rxjs";

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

  selectedTab$: Subject<TabComponent> = new Subject<TabComponent>();
  tabContent$: Subject<TemplateRef<any>> = new Subject<TemplateRef<any>>();
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
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  switchTab(next: TabComponent) {
    this.selectedTab$.next(next);
    this.changeDetection.detectChanges();
  }
}
