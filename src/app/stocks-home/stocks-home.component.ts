import { Component, OnInit } from '@angular/core';
import { StocksHomeService } from './stocks-home.service';
import { StocksDisplayData } from './stocks-quote';
import { StocksSearch } from './stocks-search';

@Component({
  selector: 'app-stocks-home',
  templateUrl: './stocks-home.component.html',
  styleUrls: ['./stocks-home.component.css'],
})
export class StocksHomeComponent implements OnInit {
  symbol: string = '';
  contents: Object;
  searchData: any;
  displayData: Array<StocksDisplayData> = [];
  loading: boolean = false;
  //companyName: string = '';
  constructor(private stocksHomeService: StocksHomeService) {}

  ngOnInit() {
    this.fetchData();
  }
  isUpperCase(input: String) {
    return input == input.toUpperCase();
  }
  tradeStock() {
    this.stocksHomeService.getQuoteData(this.symbol).subscribe(
      (results) => {
        this.contents = results;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCompanyName() {
    this.loading = true;
    this.displayData = [];
    this.stocksHomeService.getCompanyName(this.symbol).subscribe(
      (data) => {
        this.searchData = data;
        console.log('searchData', this.searchData);
        this.saveDataToLocal();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  saveDataToLocal() {
    let data = this.contents;
    data = {
      ...data,
      companyName: this.searchData.result[0].description,
      symbol: this.symbol,
    };
    console.log(
      typeof window.localStorage.getItem(this.symbol),
      window.localStorage.getItem(this.symbol)
    );
    if (window.localStorage.getItem(this.symbol) == null) {
      window.localStorage.setItem(this.symbol, JSON.stringify(data)),
        console.log(
          window.localStorage.length,
          window.localStorage.key(1),
          this.isUpperCase(window.localStorage.key(1))
        );
    }
    this.fetchData();
    this.loading = false;
  }

  fetchData() {
    this.displayData = [];
    let storageLength = window.localStorage.length;
    console.log('length of local data-->>', storageLength);
    for (let i = 0; i < storageLength; i++) {
      if (
        this.isUpperCase(window.localStorage.key(i)) &&
        window.localStorage.key(i).length > 0 &&
        window.localStorage.key(i).length < 6
      ) {
        this.displayData = this.displayData.concat(
          JSON.parse(window.localStorage.getItem(window.localStorage.key(i)))
        );
      }
    }
    console.log('>>>>>>>>', this.displayData);
  }
  removeStock(symbol) {
    console.log('##############', symbol);
    window.localStorage.removeItem(symbol);
    this.fetchData();
  }
}
