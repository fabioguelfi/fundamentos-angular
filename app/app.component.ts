import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
      <div class="app">
        {{ title }}
        <h1 [innerHtml]="title"></h1>
        <img [src]="logo">
        <input type="text" [value]="name">
        <div>
          {{ name }}
        </div>
      </div>
    `
})
export class AppComponent {

  public title: string = 'fabio guelfi';
  public logo: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png';
  public name: string = 'Angular';
  constructor() {
  }

}