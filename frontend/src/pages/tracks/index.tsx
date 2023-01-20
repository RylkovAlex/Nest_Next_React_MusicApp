import TrackList from '@/components/TrackList/TrackList';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import MainLayout from '@/layouts/MainLayout';
import { NextThunkDispatch, wrapper } from '@/store';
import { fetchTracks, searchTracks } from '@/store/action-creators/track';
import { Box, Button, Card, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { shallowEqual } from 'react-redux';

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch() as NextThunkDispatch;

  const { tracks, error } = useTypedSelector(
    (state) => state.track,
    shallowEqual
  );
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(
    null
  );

  const [query, setQuery] = useState('');

  const search = async ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(value);
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(async () => await dispatch(await searchTracks(value)), 500)
    );
  };

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
    <MainLayout title={'Tracks'}>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Tracks</h1>
              <TextField fullWidth value={query} onChange={search}></TextField>
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
      await dispatch(fetchTracks());

      return { props: {} };
    }
);
