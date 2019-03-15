import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, borderDirective, ShowPriceDirective } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    borderDirective,
    ShowPriceDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
