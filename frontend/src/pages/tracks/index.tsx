import TrackList from '@/components/TrackList/TrackList';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import MainLayout from '@/layouts/MainLayout';
import { NextThunkDispatch, wrapper } from '@/store';
import { fetchTracks } from '@/store/action-creators/track';
import { ITrack } from '@/types/ITrack';
import { Box, Button, Card, Grid } from '@mui/material';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { shallowEqual } from 'react-redux';

const Index = () => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector(
    (state) => state.track,
    shallowEqual
  );

  useEffect(() => console.log(tracks), [tracks]);
  /*   const tracks: ITrack[] = [
    {
      _id: '1',
      name: 'trackName',
      artist: 'artist',
      text: 'string',
      listens: 0,
      picture: 'http://localhost:5000/image/2d6a2c0b-66d0-4189-b3b8-96b53c9d3e5b.png',
      audio: 'http://localhost:5000/audio/b4e957b6-e46a-46f9-9b45-ac1c59a3fc39.mp3',
      comments: [
        {
          _id: '1',
          userName: 'string',
          text: 'string',
          trackId: '1',
        },
      ],
    },
  ]; */

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    );
  }

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

// @ts-ignore TODO:
/* export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async() => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(await fetchTracks());
}); */

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      const dispatch = store.dispatch as NextThunkDispatch;
      const tracks = await dispatch(fetchTracks());

      return { props: {tracks} };
    }
);
