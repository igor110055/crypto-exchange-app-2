const priceFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'code',
});

export const formatPrice = (value: number) => priceFormat.format(value).replace('USD', '').trim();
