import MainLayout from '@/layouts/MainLayout';
import { ITrack } from '@/types/ITrack';
import { Button, Divider, Grid, Paper, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

interface TrackPageProps {
  track: ITrack;
}

const TrackPage: React.FC<TrackPageProps> = () => {
  const router = useRouter();
  const track = {
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
  };
  return (
    <MainLayout>
      <Button variant={'contained'} onClick={() => router.push('/tracks')}>
        Back to list
      </Button>
      <Grid container alignItems={'center'} style={{ margin: '20px 0' }}>
        <img src={track.picture} width={200} height={200} />
        <div style={{ margin: '20px 0' }}>
          <h1>Track name: {track.name}</h1>
          <h1>Track artist: {track.artist}</h1>
          <h1>Track have been listend: {track.listens} times.</h1>
        </div>
      </Grid>
      <h2>Track text</h2>
      <p>{track.text}</p>
      <h1>Comments:</h1>
      <Grid container>
        <TextField label="Your Name" fullWidth></TextField>
        <TextField
          label="Your Comment"
          fullWidth
          multiline
          rows={5}
        ></TextField>
        <Button>Send</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <Paper elevation={3} style={{ padding: '20px' }}>
            <div>
              <h4>Author: {comment.userName}</h4>
              <h4>Comment: </h4>
              <p>{comment.text}</p>
            </div>
          </Paper>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
