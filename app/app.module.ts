import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}