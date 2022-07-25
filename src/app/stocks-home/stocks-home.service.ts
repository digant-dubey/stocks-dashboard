import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class StocksHomeService {
  constructor(private http: HttpClient) {}

  getQuoteData(symbol: String) {
    const URL =
      'https://finnhub.io/api/v1/quote?symbol=' +
      symbol +
      '&token=bu4f8kn48v6uehqi3cqg';
    return this.http.get(URL);
  }

  getCompanyName(symbol: String) {
    const URL =
      'https://finnhub.io/api/v1/search?q=' +
      symbol +
      '&token=bu4f8kn48v6uehqi3cqg';
    return this.http.get(URL).pipe(map((res) => res));
  }
}
