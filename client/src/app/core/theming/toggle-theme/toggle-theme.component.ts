import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {map, Observable, take} from "rxjs";
import {Theme} from "../theme";
import {ThemingService} from "../theming.service";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-toggle-theme',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss']
})
export class ToggleThemeComponent {
  theme$: Observable<Theme> = this.themingService.theme$;

  isToggleChecked$: Observable<boolean> = this.theme$.pipe(
    map(theme => theme === Theme.Dark)
  );

  constructor(private readonly themingService: ThemingService) {}

  onToggleChange(): void {
    this.theme$.pipe(take(1)).subscribe(theme => {
      console.log(theme)
      if (theme === Theme.Dark) {
        this.themingService.setTheme(Theme.Light);
        return;
      }

      this.themingService.setTheme(Theme.Dark);
    });
  }
}
