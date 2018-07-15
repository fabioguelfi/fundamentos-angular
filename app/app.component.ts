import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
      <div class="app">
        <input
        type="text"
        (input)="handleInput($event.target.value)"
        >
      <div *ngIf="name.length > 5; else template">
        Buscando por ... {{ name }}
      </div>
      <ng-template #template>
        <div>
        Aguarde, estamos consultando nossa base de dados ...
        </div>
      </ng-template>
      </div>
    `
})
export class AppComponent {
  public name: string = "";
  constructor() {}

  private handleInput(value: string): void {
    this.name = value;
  }
}
