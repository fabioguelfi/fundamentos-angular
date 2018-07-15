import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
      <div class="app">
        {{ title }}
        <div>
        {{ numero1 + numero2 }}
        </div>
        <div>
          {{ isHappy ? ':)' : ':(' }}
        </div>
      </div>
    `
})
export class AppComponent {

  public title: string = 'fabio guelfi'
  public numero1: number = 7;
  public numero2: number = 7;
  public isHappy: boolean = false;

  constructor() {
  }

}