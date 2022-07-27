import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocksHomeComponent } from './stocks-home/stocks-home.component';
import { StocksSentimentComponent } from './stocks-sentiment/stocks-sentiment.component';

const routes: Routes = [
  { path: '', component: StocksHomeComponent },
  { path: 'sentiment/:symbol', component: StocksSentimentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
