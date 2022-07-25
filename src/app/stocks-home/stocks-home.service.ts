import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { StocksQuote } from './stocks-quote';
import { StocksSearch } from './stocks-search';

@Injectable({ providedIn: 'root' })
export class StocksHomeService {
  constructor(private http: HttpClient) {}

  getQuoteData(symbol: String): Observable<StocksQuote[]> {
    const URL =
      'https://finnhub.io/api/v1/quote?symbol=' +
      symbol +
      '&token=bu4f8kn48v6uehqi3cqg';
    return this.http.get<StocksQuote[]>(URL);
  }

  getCompanyName(symbol: String): Observable<StocksSearch[]> {
    const URL =
      'https://finnhub.io/api/v1/search?q=' +
      symbol +
      '&token=bu4f8kn48v6uehqi3cqg';
    return this.http.get<StocksSearch[]>(URL);
  }
}
