import { useInput } from '@/hooks/useInput';
import MainLayout from '@/layouts/MainLayout';
import { ITrack } from '@/types/ITrack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface TrackPageProps {
  serverTrack: ITrack;
}

const TrackPage: React.FC<TrackPageProps> = ({ serverTrack }) => {
  const [track, setTrack] = useState<ITrack>(serverTrack);

  if (!track) {
    return <h1>No track found</h1>;
  }

  const router = useRouter();
  const userName = useInput('');
  const comment = useInput('');

  const addComment = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/tracks/comment`,
        {
          user_name: userName.value,
          text: comment.value,
          trackId: track._id,
        }
      );
      setTrack({ ...track, comments: [...track.comments, response.data] });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout title={`Music App ${track.name} by ${track.artist}`}>
      <Button variant={'contained'} onClick={() => router.push('/tracks')}>
        Back to list
      </Button>
      <Grid container alignItems={'center'} style={{ margin: '20px 0' }}>
        <img
          src={`${process.env.NEXT_PUBLIC_SRC_URL}/${track.picture}`}
          width={200}
          height={200}
        />
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
        <TextField {...userName} label="Your Name" fullWidth></TextField>
        <TextField
          {...comment}
          label="Your Comment"
          fullWidth
          multiline
          rows={5}
        ></TextField>
        <Button onClick={addComment}>Send</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <Paper elevation={3} style={{ padding: '20px' }}>
            <div>
              <h4>Author: {comment.user_name}</h4>
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get(
    `${process.env.DOCKER ? process.env.NEXT_PUBLIC_DOCKER_API_URL : process.env.NEXT_PUBLIC_API_URL}/tracks/` + params!.id
  );
  return {
    props: {
      serverTrack: response.data,
    },
  };
};
