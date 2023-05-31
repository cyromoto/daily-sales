import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'daily-sales';
  currentDate: Date = new Date();
  dateFormatted;


constructor(private datePipe: DatePipe) {
    this.dateFormatted = this.datePipe.transform(this.currentDate, 'dd/MM/yyyy');
  }

}
