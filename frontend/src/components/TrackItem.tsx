import { ITrack } from '@/types/ITrack';
import { Card, Grid, IconButton } from '@mui/material';
import React from 'react';
import styles from '@/styles/TrackItem.module.scss';
import { Pause, PlayArrow, Delete } from '@mui/icons-material';
import { useRouter } from 'next/router';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();

  return (
    <Card
      className={styles.trackCard}
      onClick={() => router.push('/tracks/' + track._id)}
    >
      <IconButton onClick={(evt) => evt.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img width={70} height={70} src={track.picture} />
      <Grid container direction="column" className={styles.trackInfo}>
        <div className={styles.trackName}>{track.name}</div>
        <div className={styles.trackArtist}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 03:00</div>}
      <IconButton
        onClick={(evt) => evt.stopPropagation()}
        className={styles.deleteButton}
      >
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
