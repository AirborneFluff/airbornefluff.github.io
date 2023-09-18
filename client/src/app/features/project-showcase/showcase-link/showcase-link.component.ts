import {Component, Input} from '@angular/core';

@Component({
  selector: 'showcase-link',
  templateUrl: './showcase-link.component.html',
  styleUrls: ['./showcase-link.component.scss']
})
export class ShowcaseLinkComponent {
  @Input() label: string = 'link';
  @Input() href: string | undefined = undefined;
  protected readonly undefined = undefined;
}
