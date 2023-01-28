import React, { useEffect, useState } from 'react';

import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Pause from '@mui/icons-material/Pause';
import PlayArrow from '@mui/icons-material/PlayArrow';
import VolumeOff from '@mui/icons-material/VolumeOff';
import VolumeUp from '@mui/icons-material/VolumeUp';

import styles from './Player.module.scss';
import TrackProgress from '../TrackProgress/TrackProgress';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';

let audio: HTMLAudioElement | null;

const Player: React.FC = () => {
  const { active, volume, pause, duration, currentTime } = useTypedSelector(
    (state) => state.player
  );

  const [currentVolume, setCurrentVolume] = useState(volume);

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else if (active) {
      setAudio(audio);
      if (!pause) {
        playTrack();
      }
    }
  }, [active?.audio]);

  useEffect(() => {
    pause ? audio?.pause() : audio?.play();
  }, [pause]);

  const {
    pauseTrack,
    playTrack,
    setTrackVolume,
    setTrackDuration,
    setTarckCurrentTime,
  } = useActions();

  if (!active) {
    return null;
  }

  const setAudio = (audio: HTMLAudioElement) => {
    if (!active) {
      return pauseTrack();
    }
    const src = `${process.env.NEXT_PUBLIC_SRC_URL}/${active.audio}`;
    if (audio.src !== src) {
      audio.src = src;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setTrackDuration(Math.ceil(audio!.duration));
      };
      audio.ontimeupdate = () => {
        setTarckCurrentTime(Math.ceil(audio!.currentTime));
      };
    }
    pause ? audio?.pause() : audio?.play();
  };

  const play = (evt: React.SyntheticEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    if (pause) {
      playTrack();
    } else {
      pauseTrack();
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

export default React.memo(Player);
