import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import React from 'react';
import styles from '@/styles/Player.module.scss';
import TrackProgress from './TrackProgress';

const Player: React.FC = (props) => {
  const active = false;
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
    <div className={styles.player}>
      <IconButton onClick={(evt) => evt.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid className={styles.trackInfo} container direction="column">
        <div>{track.name}</div>
        <div className={styles.artistInfo}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => {}} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={0} right={100} onChange={() => {}} />
    </div>
  );
};

export default Player;
