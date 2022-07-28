import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StocksSentimentService } from './stocks-sentiment.service';
import { Observable } from 'rxjs';
import { StocksSentiment } from './stocks-sentiment';

@Component({
  selector: 'app-stocks-sentiment',
  templateUrl: './stocks-sentiment.component.html',
  styleUrls: ['./stocks-sentiment.component.css'],
})
export class StocksSentimentComponent implements OnInit {
  symbol: string;
  contents: any;
  companyName: String;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private stocksSentimentService: StocksSentimentService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log(params);
      this.symbol = params.get('symbol');
      console.log(this.symbol);
      this.getSentimentDetail();
    });
  }

  getSentimentDetail() {
    let fromDate: String = '',
      toDate: String = '';
    const d = new Date();
    fromDate =
      d.getFullYear().toString() + '-0' + (d.getMonth() - 2).toString() + '-01';
    toDate =
      d.getFullYear().toString() + '-0' + d.getMonth().toString() + '-01';
    console.log(fromDate, toDate);
    this.stocksSentimentService
      .getSentimentData(this.symbol, fromDate, toDate)
      .subscribe(
        (results) => {
          this.contents = results;
          console.log(this.contents);
          let data = JSON.parse(window.localStorage.getItem(this.symbol));
          this.companyName = data.companyName;
          console.log(window.localStorage.getItem(this.symbol));
        },
        (err) => {
          console.log(err);
        }
      );
  }

  onBack(): void {
    this.router.navigate(['']);
  }
}
