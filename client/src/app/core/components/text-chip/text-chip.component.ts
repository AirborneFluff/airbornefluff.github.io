import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-text-chip',
  templateUrl: './text-chip.component.html',
  styleUrls: ['./text-chip.component.scss']
})
export class TextChipComponent {
  @Input() special: boolean = false;

}
