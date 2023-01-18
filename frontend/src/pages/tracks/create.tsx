import FileUpload from '@/components/FileUpload';
import StepWrapper from '@/components/StepWrapper';
import MainLayout from '@/layouts/MainLayout';
import { Box, Button, Card, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const steps = ['Track information', 'Track cover', 'Track audio'];

const CreateTrack = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicrure] = useState(null);
  const [audio, setAudio] = useState(null);

  const back = () => {
    setActiveStep((prev) => --prev);
  };

  const next = () => {
    if (activeStep !== steps.length - 1) {
      setActiveStep((prev) => ++prev);
    }
  };

  const getContent = (step: number): React.ReactNode => {
    switch (step) {
      case 0:
        return (
          <Grid container direction={'column'}>
            <TextField
              style={{ marginBottom: '10px' }}
              label={'Track name'}
            ></TextField>
            <TextField
              style={{ marginBottom: '10px' }}
              label={'Artist name'}
            ></TextField>
            <TextField label={'Track text'} multiline rows={3}></TextField>
          </Grid>
        );
      case 1:
        return (
          <FileUpload setFile={setPicrure} accept={'image/*'}>
            <Button>Add cover</Button>
          </FileUpload>
        );
      case 2:
        return (
          <FileUpload setFile={setAudio} accept={'audio/*'}>
            <Button>Add audio</Button>
          </FileUpload>
        );
      default:
        break;
    }
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep} steps={steps}>
        {getContent(activeStep)}
      </StepWrapper>
      <Grid container justifyContent={'space-between'}>
        <Button disabled={activeStep === 0} onClick={back} variant={'outlined'}>
          Back
        </Button>
        <Button onClick={next} variant={'outlined'}>
          Next
        </Button>
      </Grid>
    </MainLayout>
  );
};

export default CreateTrack;
