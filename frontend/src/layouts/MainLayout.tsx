import Navbar from '@/components/Navbar/Navbar';
import Player from '@/components/Player/Player';
import { Container } from '@mui/material';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<Props> = ({ children }) => (
  <>
    <Navbar />
    <Container style={{ margin: '100px 50px' }}>{children}</Container>
    <Player/>
  </>
);

export default MainLayout;
