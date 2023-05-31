import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesEntryComponent } from './sales-entry/sales-entry.component';
import { SalesListComponent } from './sales-list/sales-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/sales-entry', pathMatch: 'full' },
  { path: 'sales-entry', component: SalesEntryComponent },
  { path: 'sales-list', component: SalesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

