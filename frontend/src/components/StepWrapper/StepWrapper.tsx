import { Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';
import styles from './StepWrapper.module.scss';

interface StepWrapperProps {
  activeStep: number;
  children: React.ReactNode;
  steps: string[];
}

const StepWrapper: React.FC<StepWrapperProps> = ({
  steps,
  activeStep,
  children,
}) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container justifyContent="center" className={styles.contentWrapper}>
        <Card className={styles.contentCard}>{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;
