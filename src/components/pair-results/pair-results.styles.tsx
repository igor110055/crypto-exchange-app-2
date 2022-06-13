import { Card, Select, styled, Typography } from '@mui/material';

export const StyledContainer = styled('div')(() => ({
  height: 'calc(100% - 64px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  width: '360px',
  margin: theme.spacing(1),
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  width: '360px',
  margin: theme.spacing(1),
}));

export const ExchangeName = styled(Typography)(({ theme }) => ({
  textTransform: 'capitalize',
}));

export const SymbolName = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  marginBottom: theme.spacing(1),
}));
