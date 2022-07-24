import { Component, OnInit } from '@angular/core';
import { StocksHomeService } from './stocks-home.service';

@Component({
  selector: 'app-stocks-home',
  templateUrl: './stocks-home.component.html',
  styleUrls: ['./stocks-home.component.css'],
})
export class StocksHomeComponent implements OnInit {
  symbol: string = '';
  contents: object = {};
  constructor(private stocksHomeService: StocksHomeService) {}

  ngOnInit() {}

  tradeStock() {
    this.stocksHomeService
      .getQuoteData()
      .subscribe((results) => ((this.contents = results)));
  }
}
