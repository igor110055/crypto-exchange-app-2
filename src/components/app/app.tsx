import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Landing } from '../landing/landing';
import { PairResults } from '../pair-results/pair-results';
import { RootContainer } from './app.styles';

export const App: React.FC = () => (
  <RootContainer>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path=":pairName" element={<PairResults />} />
    </Routes>
  </RootContainer>
);
