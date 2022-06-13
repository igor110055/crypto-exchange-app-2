import Axios from 'axios';
import { HuobiRestAPI } from 'huobi-api';
import { QueryFunction } from 'react-query';
import { BinanceData, HuobiData } from '../types/exchanges';
import { ExchangeQueryKey } from '../types/query-keys';

const huobiRestAPI = new HuobiRestAPI({
  accessKey: '6517b0a2-mk0lklo0de-4541aebc-0a219',
  secretKey: 'e3b80954-1001a882-fed10094-ee196',
});

export const fetchBinanceData: QueryFunction<Promise<BinanceData>, ExchangeQueryKey> = async ({
  queryKey: [_query, { pairName }],
}) =>
  (
    await Axios.get('https://api.binance.com/api/v3/ticker/price', {
      params: {
        symbol: pairName && pairName.toUpperCase(),
      },
    })
  ).data;

export const fetchHuobiData: QueryFunction<Promise<HuobiData>, ExchangeQueryKey> = async ({
  queryKey: [_query, { pairName }],
}) =>
  huobiRestAPI.get('/market/detail/merged', {
    symbol: pairName && pairName.toLowerCase(),
  });
