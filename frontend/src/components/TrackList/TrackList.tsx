import { ITrack } from '@/types/ITrack';
import { Box, Grid } from '@mui/material';
import React from 'react';
import TrackItem from '../TrackItem/TrackItem';

interface TrackListProps {
  tracks: ITrack[];
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem track={track} key={track._id}></TrackItem>
        ))}
      </Box>
    </Grid>
  );
};

export default TrackList;
