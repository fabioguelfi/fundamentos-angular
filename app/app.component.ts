import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
      <div class="app">
        <li *ngFor="let passageiro of passageiros; index as i">
          <span class="status" 
          [ngStyle]="{
            backgroundColor: (passageiro.checkedIn) ? 'green' : 'red'
          }"
          ></span>
          {{ i + 1 }}: {{ passageiro.fullname }}
          <div>
            CheckIn Date {{ passageiro.checkInDate | date: 'yMMM' }}
          </div>
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
      checkInDate: 149074200000
    },
    {
      id: 2,
      fullname: 'Renata Guelfi',
      checkedIn: true,
      checkInDate: 179074200000
    },
    {
      id: 3,
      fullname: 'Rodrigo Guelfi',
      checkedIn: false,
      checkInDate: 209074200000
    },
    {
      id: 4,
      fullname: 'Ricardo Guelfi',
      checkedIn: true,
      checkInDate: 289074200000
    }
  ];
}
