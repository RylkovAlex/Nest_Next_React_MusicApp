import Navbar from '@/components/Navbar/Navbar';
import Player from '@/components/Player/Player';
import Container from '@mui/material/Container';
import Head from 'next/head';
import React from 'react';

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FunctionComponent<Props> = ({
  children,
  title = 'Music App',
  description = 'App for listening best tracks',
  keywords = 'music, tracks, audio, artist',
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Navbar />
    <Container style={{ margin: '100px 50px' }}>{children}</Container>
    <Player />
  </>
);

export default MainLayout;
