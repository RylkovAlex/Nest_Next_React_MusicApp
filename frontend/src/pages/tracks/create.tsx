import FileUpload from '@/components/FileUpload/FileUpload';
import StepWrapper from '@/components/StepWrapper/StepWrapper';
import { useInput } from '@/hooks/useInput';
import MainLayout from '@/layouts/MainLayout';
import { Box, Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from './styles/create.module.scss';

const steps = ['Track information', 'Track cover', 'Track audio'];

const CreateTrack = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicrure] = useState(null);
  const [audio, setAudio] = useState(null);

  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');

  const router = useRouter();
  const back = () => {
    setActiveStep((prev) => --prev);
  };

  const next = () => {
    if (activeStep !== steps.length - 1) {
      setActiveStep((prev) => ++prev);
    } else {
      const formData = new FormData();
      formData.append('name', name.value);
      formData.append('text', text.value);
      formData.append('artist', artist.value);
      if (picture) {
        formData.append('picture', picture);
      }
      if (audio) {
        formData.append('audio', audio);
      }
      axios
        .post('http://localhost:5000/api/tracks/', formData, {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        })
        .then(() => router.push('/tracks'))
        .catch((e) => console.log(e));
    }
  };

  const getContent = (step: number): React.ReactNode => {
    switch (step) {
      case 0:
        return (
          <Grid container direction={'column'}>
            <TextField
              {...name}
              className={styles.textField}
              label={'Track name'}
            ></TextField>
            <TextField
              {...artist}
              className={styles.textField}
              label={'Artist name'}
            ></TextField>
            <TextField
              {...text}
              label={'Track text'}
              multiline
              rows={3}
            ></TextField>
          </Grid>
        );
      case 1:
        return (
          <FileUpload setFile={setPicrure} accept={'image/*'}>
            <Button className={styles.center} variant={'contained'}>
              Add cover
            </Button>
          </FileUpload>
        );
      case 2:
        return (
          <FileUpload setFile={setAudio} accept={'audio/*'}>
            <Button className={styles.center} variant={'contained'}>
              Add audio
            </Button>
          </FileUpload>
        );
      default:
        break;
    }
  };

  return (
    <MainLayout>
      <h1>Upload a new track:</h1>
      <StepWrapper activeStep={activeStep} steps={steps}>
        {getContent(activeStep)}
        <Grid
          container
          justifyContent={'space-between'}
          style={{ paddingTop: '20px' }}
        >
          <Button
            disabled={activeStep === 0}
            onClick={back}
            variant={'outlined'}
          >
            Back
          </Button>
          <Button onClick={next} variant={'outlined'}>
            Next
          </Button>
        </Grid>
      </StepWrapper>
    </MainLayout>
  );
};

export default CreateTrack;
