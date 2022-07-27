import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StocksHomeComponent } from './stocks-home/stocks-home.component';
import { StocksSentimentComponent } from './stocks-sentiment/stocks-sentiment.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, StocksHomeComponent, StocksSentimentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
