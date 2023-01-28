import TrackList from '@/components/TrackList/TrackList';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import MainLayout from '@/layouts/MainLayout';
import { NextThunkDispatch, wrapper } from '@/store';
import { fetchTracks, searchTracks } from '@/store/action-creators/track';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch() as NextThunkDispatch;

  const { tracks, error } = useTypedSelector((state) => state.track);

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    );
  }

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
  (store) => async () => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchTracks());

    return { props: {} };
  }
);
