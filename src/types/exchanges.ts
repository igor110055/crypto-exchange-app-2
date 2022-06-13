export interface BinanceData {
  price: string;
}

export interface HuobiData {
  tick: {
    close: number;
  };
}

export interface PairData {
  price: number;
  status: 'loading' | 'success' | 'error';
}

export type PairDataOrder = 'default' | 'priceAsc' | 'priceDesc';

export type Exchange = 'binance' | 'huobi';
