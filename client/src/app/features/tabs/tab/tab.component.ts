import {
  AfterContentInit, AfterViewInit,
  Component, ContentChild,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {ReplaySubject} from "rxjs";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements AfterViewInit {
  @Input() label: string = 'tab';
  @Output() tabInit$: ReplaySubject<TemplateRef<any>> = new ReplaySubject<TemplateRef<any>>();
  @ViewChild('content') contentTemplate!: TemplateRef<any>;

  ngAfterViewInit(): void {
    this.tabInit$.next(this.contentTemplate);
  }
}
