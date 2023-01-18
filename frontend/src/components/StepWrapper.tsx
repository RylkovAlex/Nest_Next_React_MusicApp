import { Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';

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
      <Grid
        container
        justifyContent="center"
        style={{ margin: '70px 0', height: 270 }}
      >
        <Card style={{ width: '600px', padding: '20px' }}>{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;
