import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
      <div class="app">
      <button (click)="handlerClick(username.value)">
        Obter Valor
      </button>
        <input
        type="text"
        #username
        >
        <div>
        {{ name }}
        </div>
      </div>
    `
})
export class AppComponent {
  public name: string = '';
  constructor() {}

  private handlerClick(username: string): void {
    this.name = username;
  }
}