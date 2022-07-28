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
  sub;
  symbol: string;
  contents: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private stocksSentimentService: StocksSentimentService
  ) {}

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((params) => {
      console.log(params);
      this.symbol = params.get('symbol');
      console.log(this.symbol);
      this.getSentimentDetail();
    });
  }

  getSentimentDetail() {
    this.stocksSentimentService.getSentimentData(this.symbol).subscribe(
      (results) => {
        this.contents = results;
        console.log(this.contents);
      },
      (err) => {
        //console.log(err);
      }
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['']);
  }
}
