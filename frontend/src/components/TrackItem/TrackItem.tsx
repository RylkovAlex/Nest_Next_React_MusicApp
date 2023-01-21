import { ITrack } from '@/types/ITrack';
import { Card, Grid, IconButton } from '@mui/material';
import React from 'react';
import styles from './TrackItem.module.scss';
import { Pause, PlayArrow, Delete } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track }) => {
  const router = useRouter();
  const { playTrack, pauseTrack, setTrack } = useActions();
  const { pause, active } = useTypedSelector((state) => state.player);

  const play = (evt: React.SyntheticEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    if (active?._id !== track._id) {
      setTrack(track);
    }
    if (pause) {
      playTrack();
    } else {
      pauseTrack();
    }
  };

  const renderPlayIcon = () => {
    if (active?._id !== track._id) {
      return <PlayArrow />;
    }
    return pause ? <PlayArrow /> : <Pause />;
  };

  return (
    <Card
      className={styles.trackCard}
      onClick={() => router.push('/tracks/' + track._id)}
    >
      <IconButton onClick={play}>{renderPlayIcon()}</IconButton>
      <img
        width={70}
        height={70}
        src={'http://localhost:5000/' + track.picture}
      />
      <Grid container direction="column" className={styles.trackInfo}>
        <div className={styles.trackName}>{track.name}</div>
        <div className={styles.trackArtist}>{track.artist}</div>
      </Grid>
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
