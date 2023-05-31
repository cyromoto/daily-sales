import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-entry',
  templateUrl: './sales-entry.component.html',
  styleUrls: ['./sales-entry.component.css']
})
export class SalesEntryComponent {
  uplift: number;
  cashTransactions: number;
  payZone: number;
  lottoPlayed: number;
  till: number;
  atm50s: number;
  atm20s: number;
  atmWithdrawal: number;
  atmOut: number;
  total:number;
  upliftEntries: number[] = [];

  constructor(){
    this.uplift=0;
    this.cashTransactions=0;
    this.payZone=0;
    this.lottoPlayed=0;
    this.till=0;
    this.atm50s=0;
    this.atm20s=0;
    this.atmWithdrawal =0;
    this.atmOut=0;
    this.total=0;
  }
  ngOnInit() {
    this.total = this.cashTransactions + this.till + this.lottoPlayed;
  }
  onSubmit() {
    // You can add your form submission logic here
    console.log('Form submitted!');
  }
  updateTotal() {
    this.total = this.cashTransactions + this.till + this.lottoPlayed;
  }
  addUplift() {
    this.upliftEntries.push(this.uplift);
    this.uplift = 0;
  }
  getTotalUplift(): number {
    return this.upliftEntries.reduce((total, entry) => total + entry, 0);
  }
}
