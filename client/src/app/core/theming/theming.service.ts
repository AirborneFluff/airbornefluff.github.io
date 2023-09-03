import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, shareReplay, Subscription} from "rxjs";
import {hydrate} from "../common/pipes/hydrate.pipe";
import {Theme} from "./theme";

@Injectable({
  providedIn: 'root'
})
export class ThemingService {
  private readonly themeClass = {
    [Theme.Light]: 'light-theme',
    [Theme.Dark]: 'dark-theme'
  }
  private readonly _subscriptions = new Subscription();
  private _themeSubject: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(this.clientPreferredTheme);

  theme$: Observable<Theme> = this._themeSubject.pipe(
    hydrate('app-theme', this.clientPreferredTheme),
    shareReplay(1)
  )

  constructor() {
    this._subscriptions.add(
      this.theme$.subscribe(theme => {
        this.setThemeClass(theme);
      })
    );
    this.setTheme(Theme.Dark)
  }

  public setTheme(theme: Theme) {
    this._themeSubject.next(theme)
  }

  private get clientPreferredTheme(): Theme {
    const prefersDark: boolean = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    return prefersDark ? Theme.Dark : Theme.Light;
  }

  private setThemeClass(theme: Theme): void {
    const themeClass = this.themeClass[theme]
    if (!themeClass) return

    const body = document.getElementsByTagName('body')[0];
    body.classList.remove(...Object.values(this.themeClass));
    body.classList.add(this.themeClass[theme]);


    const appTheme = document.getElementById('app-theme');

    if (!appTheme) {
      console.error('`app-theme` element not found, could not set theme');
      return;
    }

    appTheme.classList.remove(...Object.values(this.themeClass));
    appTheme.classList.add(themeClass);
  }
}
