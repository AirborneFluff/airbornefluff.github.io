import {
  ApplicationRef, createComponent, EnvironmentInjector,
  Injectable, Renderer2, RendererFactory2,
  Type
} from '@angular/core';
import {DialogHostComponent} from "./dialog-host/dialog-host.component";
import {TestModalComponent} from "../../features/test-modal/test-modal.component";

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private readonly renderer!: Renderer2;
  private readonly environmentInjector: EnvironmentInjector;
  private readonly hostElementId: string = 'dialog-host';
  private readonly hostElementContentId: string = 'dialog-host-content';
  private hostElement: any;

  private componentRef: any;

  constructor(private appRef: ApplicationRef, private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.environmentInjector = this.appRef.injector;
  }

  open(component: Type<any>) {
    this.createHostElement(component);
  }

  close() {
    // const index = this.appRef.components.indexOf(this.componentRef.hostView)
    // if (index != -1) this.appRef.components.
  }

  private createHostElement(component: Type<any>) {
    this.hostElement = this.renderer.createElement('div')
    this.hostElement.id = this.hostElementId;

    this.renderer.appendChild(document.body, this.hostElement);

    const hostRef = createComponent(DialogHostComponent, {
      environmentInjector: this.environmentInjector,
      hostElement: this.hostElement })

    const hostContainerElement = document.getElementById(this.hostElementContentId);
    if (!hostContainerElement) return;

    this.componentRef = createComponent(component, {
      environmentInjector: this.environmentInjector,
      hostElement: hostContainerElement })

    this.appRef.attachView(this.componentRef.hostView);
  }
}
