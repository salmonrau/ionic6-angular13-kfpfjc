import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Ionic 6.2 Angular ' + VERSION.major;
  cards = [
    {
      date: 'Today',
      name: 'John Peterson',
      time: 'Just now',
      price: '50.00$',
      symbol: '+',
    },
    {
      date: 'Today',
      name: 'Clartk jaskson',
      time: '5:20',
      price: '42.00$',
      symbol: '-',
    },
  ];
  constructor() {}

  ionViewDidEnter() {}
}
