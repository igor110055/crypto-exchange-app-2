import { CardContent, MenuItem, SelectChangeEvent, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { BinanceData, Exchange, HuobiData, PairData, PairDataOrder } from '../../types/exchanges';
import { ExchangeQueryKey } from '../../types/query-keys';
import { fetchBinanceData, fetchHuobiData } from '../../utils/api';
import { formatPrice } from '../../utils/formatters';
import { Header } from '../header/header';
import {
  ExchangeName,
  StyledCard,
  StyledContainer,
  StyledSelect,
  SymbolName,
} from './pair-results.styles';

export const PairResults: React.FC = () => {
  const { pairName } = useParams();
  const [order, setOrder] = useState<PairDataOrder>('default');
  const [pairDataByExchange, setpairDataByExchange] = useState<Record<Exchange, PairData>>({
    binance: {
      price: 0,
      status: 'loading',
    },
    huobi: {
      price: 0,
      status: 'loading',
    },
  });

  useQuery<Promise<BinanceData>, Error, BinanceData, ExchangeQueryKey>({
    queryKey: ['binance', { pairName }],
    queryFn: fetchBinanceData,
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
    refetchInterval: pairDataByExchange['binance'].status === 'success' ? 3000 : undefined,
    onSuccess: (data) =>
      setpairDataByExchange((old) => ({
        ...old,
        binance: {
          price: Number(data.price),
          status: 'success',
        },
      })),
    onError: () =>
      setpairDataByExchange((old) => ({
        ...old,
        binance: {
          price: 0,
          status: 'error',
        },
      })),
  });

  useQuery<Promise<HuobiData>, Error, HuobiData, ExchangeQueryKey>({
    queryKey: ['huobi', { pairName }],
    queryFn: fetchHuobiData,
    retry: 1,
    retryDelay: 1000,
    refetchOnWindowFocus: false,
    refetchInterval: pairDataByExchange['huobi'].status === 'success' ? 3000 : undefined,
    onSuccess: (data) =>
      setpairDataByExchange((old) => ({
        ...old,
        huobi: {
          price: Number(data.tick.close),
          status: 'success',
        },
      })),
    onError: () =>
      setpairDataByExchange((old) => ({
        ...old,
        huobi: {
          price: 0,
          status: 'error',
        },
      })),
  });

  const handleChange = (event: SelectChangeEvent<unknown>) =>
    setOrder(event.target.value as PairDataOrder);

  const sortPairData = (a: PairData, b: PairData) => {
    if (order === 'priceAsc') {
      return a.price - b.price;
    }

    if (order === 'priceDesc') {
      return b.price - b.price;
    }

    return 0;
  };

  return (
    <>
      <Header />
      <StyledContainer>
        <StyledSelect value={order} onChange={handleChange}>
          <MenuItem value="default">Default (Name)</MenuItem>
          <MenuItem value="priceAsc">Price (Ascending)</MenuItem>
          <MenuItem value="priceDesc">Price (Descending)</MenuItem>
        </StyledSelect>
        {Object.entries(pairDataByExchange)
          .sort(([_exchangeA, pairDataA], [_exchangeB, pairDataB]) =>
            sortPairData(pairDataA, pairDataB)
          )
          .map(([exchange, pairData]) => (
            <StyledCard key={exchange} variant="outlined">
              <CardContent>
                <ExchangeName variant="h5">{exchange}</ExchangeName>
                <SymbolName color="text.secondary">{pairName}</SymbolName>
                <Typography variant="body2">
                  {pairData.status === 'loading' && 'Loading data…'}
                  {pairData.status === 'error' && 'Error fetching data'}
                  {pairData.status === 'success' && formatPrice(pairData.price)}
                </Typography>
              </CardContent>
            </StyledCard>
          ))}
      </StyledContainer>
    </>
  );
};
