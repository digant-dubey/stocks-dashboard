import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StocksHomeService {
  constructor(private http: HttpClient) {}

  getQuoteData() {
    const URL =
      'https://finnhub.io/api/v1/quote?symbol=AAPL&token=bu4f8kn48v6uehqi3cqg';
    return this.http.get(URL);
  }
}
