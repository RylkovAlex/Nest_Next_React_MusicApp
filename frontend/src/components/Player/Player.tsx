import { Pause, PlayArrow, VolumeOff, VolumeUp } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from './Player.module.scss';
import TrackProgress from '../TrackProgress/TrackProgress';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';

let audio: HTMLAudioElement | null;

const Player: React.FC = (props) => {
  const { active, volume, pause, duration, currentTime } = useTypedSelector(
    (state) => state.player
  );

  const [currentVolume, setCurrentVolume] = useState(volume);

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else if (active) {
      setAudio(audio);
      playTrack();
      audio.play();
    }
  }, [active]);

  useEffect(() => {
    if (pause) {
      audio?.pause();
    } else {
      audio?.play();
    }
  }, [pause]);

  const {
    pauseTrack,
    playTrack,
    setTrackVolume,
    setTrackDuration,
    setTarckCurrentTime,
  } = useActions();

  const setAudio = (audio: HTMLAudioElement) => {
    if (active) {
      audio.src = 'http://localhost:5000/' + active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setTrackDuration(Math.ceil(audio!.duration));
      };
      audio.ontimeupdate = () => {
        setTarckCurrentTime(Math.ceil(audio!.currentTime));
      };
    }
  };

  const play = (evt: React.SyntheticEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    if (pause) {
      playTrack();
      // audio?.play();
    } else {
      pauseTrack();
      // audio?.pause();
    }
  };
  const mute = (evt: React.SyntheticEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    if (volume) {
      setCurrentVolume(volume);
      setTrackVolume(0);
      audio!.volume = 0;
    } else {
      setTrackVolume(currentVolume);
      audio!.volume = currentVolume / 100;
    }
  };

  const changeVolume = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(evt.target.value);
    audio!.volume = value / 100;
    setTrackVolume(value);
  };

  const changeCurrentTime = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(evt.target.value);
    audio!.currentTime = value;
    setTarckCurrentTime(value);
  };

  if (!active) {
    return null;
  }

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {pause ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Grid className={styles.trackInfo} container direction="column">
        <div>{active.name}</div>
        <div className={styles.artistInfo}>{active.artist}</div>
      </Grid>
      <TrackProgress
        left={currentTime}
        right={duration}
        onChange={changeCurrentTime}
      />
      <IconButton onClick={mute} className={styles.volume}>
        {volume ? <VolumeUp /> : <VolumeOff />}
      </IconButton>
      <TrackProgress left={volume} right={100} onChange={changeVolume} />
    </div>
  );
};

export default Player;
