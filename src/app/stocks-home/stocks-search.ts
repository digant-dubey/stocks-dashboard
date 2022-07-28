export interface StocksSearch {
  count: Number;
  result: Array<Data>;
}

export interface Data {
  description: String;
  displaySymbol: String;
  symbol: String;
  type: String;
}
