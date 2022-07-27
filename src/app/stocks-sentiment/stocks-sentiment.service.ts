import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StocksSentimentService {
  constructor(private http: HttpClient) {}
  getSentimentData(symbol: String) {
    const URL =
      'https://finnhub.io/api/v1/stock/insider-sentiment?symbol=' +
      symbol +
      '&from=2022-04-01&to=2022-06-01' +
      '&token=bu4f8kn48v6uehqi3cqg';
    return this.http.get(URL);
  }
}
