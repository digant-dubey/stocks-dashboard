export interface StocksSentiment {
  data: Array<Data>;
  symbol: string;
}

export interface Data {
  symbol: string;
  year: Number;
  month: Number;
  change: Number;
  mspr: Number;
}
