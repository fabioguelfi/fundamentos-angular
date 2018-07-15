import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
      <div class="app">
        <input 
        [(ngModel)]="name"
        >
        <br>
        <button (click)="handleName()">
          Two Data
        </button>
        {{ name }}
      </div>
    `
})
export class AppComponent {

  public name: string = 'Angular';
  constructor() {
  }

  private handleName(): void {
      this.name = 'Two Data';
  }

}