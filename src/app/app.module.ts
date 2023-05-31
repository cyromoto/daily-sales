import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesEntryComponent } from './sales-entry/sales-entry.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { FormsModule } from '@angular/forms'; 
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SalesEntryComponent,
    SalesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
