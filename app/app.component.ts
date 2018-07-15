import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
      <div class="app">
      <button 
      (click)="handleClick()"
      >
      Click aqui
      </button>
        <input 
        type="text" 
        [value]="name"
        (input)="handleInput($event)"
        (change)="handleChange($event)"
        >
        <div>
          {{ name }}
        </div>
      </div>
    `
})
export class AppComponent {

  public name: string = 'Angular';
  constructor() {
  }

  private handleClick(): void {
    this.name = 'Elon Musk';
  }

  private handleInput(event: any) {
    this.name = event.target.value;
  }

  private handleChange(event: any): void {
    this.name = event.target.value;
  }

}