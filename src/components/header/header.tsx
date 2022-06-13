import SearchIcon from '@mui/icons-material/Search';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  SearchContainer,
  SearchIconWrapper,
  StyledBox,
  StyledInputBase,
  StyledLink
} from './header.styles';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { pairName } = useParams();
  const [searchText, setSearchText] = useState(pairName || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setSearchText(event.target.value);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      navigate(`/${searchText.replace('/', '').replace(' ', '')}`);
    }
  };

  return (
    <StyledBox>
      <AppBar position="static">
        <Toolbar>
          <Typography component="div" variant="h6" noWrap>
            <StyledLink to="/">Crypto Exchange</StyledLink>
          </Typography>
          <SearchContainer>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              value={searchText}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          </SearchContainer>
        </Toolbar>
      </AppBar>
    </StyledBox>
  );
};
