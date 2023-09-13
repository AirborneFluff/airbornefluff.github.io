import {Component, HostListener} from '@angular/core';
import {DialogService} from "../dialog.service";

@Component({
  selector: 'app-dialog-host',
  templateUrl: './dialog-host.component.html',
  styleUrls: ['./dialog-host.component.scss']
})
export class DialogHostComponent {

  constructor(private dialog: DialogService) {
  }
  @HostListener('click') onClick() {
    this.dialog.close();
  }

}
