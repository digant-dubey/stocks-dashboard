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
  isUpperCase(input: String) {
    return input == input.toUpperCase();
  }
  tradeStock() {
    this.stocksHomeService
      .getQuoteData(this.symbol)
      .subscribe(
        (results) => (
          (this.contents = results),
          window.localStorage.setItem(
            this.symbol,
            JSON.stringify(this.contents)
          ),
          console.log(
            window.localStorage.length,
            window.localStorage.key(1),
            this.isUpperCase(window.localStorage.key(1))
          )
        )
      );
    let data = this.contents;
    data;
  }
}
