import { alpha, Box, InputBase, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledBox = styled(Box)(() => ({
  flexGrow: 1,
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'none',
}));

export const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: 'auto',
  marginInlineStart: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
  padding: theme.spacing(0, 2),
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    width: '30ch',
    padding: theme.spacing(1, 1, 1, 0),
    paddingInlineStart: `calc(1em + ${theme.spacing(4)})`,
  },
}));
