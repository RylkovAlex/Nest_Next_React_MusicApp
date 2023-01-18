import Navbar from '@/components/Navbar';
import Player from '@/components/Player';
import { Container } from '@mui/material';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<Props> = ({ children }) => (
  <>
    <Navbar />
    <Container style={{ margin: '90px 50px' }}>{children}</Container>
    <Player/>
  </>
);

export default MainLayout;
