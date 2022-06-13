import { Exchange } from './exchanges';

export type ExchangeQueryKey = [
  Exchange,
  {
    pairName?: string;
  }
];
