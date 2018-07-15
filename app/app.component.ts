import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
      <div class="app">
        <li *ngFor="let passageiro of passageiros; index as i">
          {{ i + 1 }}: {{ passageiro.fullname }}
        </li>
      </div>
    `
})
export class AppComponent {
  public passageiros: any = [
    {
      id: 1,
      fullname: 'Fabio Guelfi',
      checkedIn: false,
    },
    {
      id: 2,
      fullname: 'Renata Guelfi',
      checkedIn: true,
    },
    {
      id: 3,
      fullname: 'Rodrigo Guelfi',
      checkedIn: false,
    },
    {
      id: 4,
      fullname: 'Ricardo Guelfi',
      checkedIn: true,
    }
  ];
}
