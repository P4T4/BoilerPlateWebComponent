import {
  ApplicationRef,
  DoBootstrap,
  Injector,
  NgModule,
  inject,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { HelloComponent } from './hello/hello/hello.component';

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
})
export class AppModule implements DoBootstrap {
  private injector = inject(Injector);
  ngDoBootstrap(): void {
    const exampleCustomElement = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('wc-boilerplate-example', exampleCustomElement);
  }
}
