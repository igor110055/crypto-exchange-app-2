import { Typography } from '@mui/material';
import React from 'react';
import { Header } from '../header/header';
import { StyledContainer } from './landing.styles';

export const Landing: React.FC = () => (
  <>
    <Header />
    <StyledContainer>
      <Typography variant="h5">
        Search for a crypto pair to find its price in Binance and Huobi
      </Typography>
    </StyledContainer>
  </>
);
