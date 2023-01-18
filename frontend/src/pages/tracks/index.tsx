import TrackList from '@/components/TrackList';
import MainLayout from '@/layouts/MainLayout';
import { ITrack } from '@/types/ITrack';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: '1',
      name: 'trackName',
      artist: 'artist',
      text: 'string',
      listens: 0,
      picture: 'string',
      comments: [
        {
          _id: '1',
          userName: 'string',
          text: 'string',
          trackId: '1',
        },
      ],
    },
  ];

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Tracks</h1>
              <TrackList tracks={tracks} />
            </Grid>
            <Button
              style={{ display: 'block', margin: 'auto' }}
              onClick={() => router.push('/tracks/create')}
            >
              Add track
            </Button>
          </Box>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
