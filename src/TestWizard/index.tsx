import React from 'react';
import { TestPage } from './TestPage';
import { Wizard } from '../Wizard';

type Props = {};

export const TestWizard: React.FC<Props> = () => {
  const test = () => {};
  return (
    <Wizard onStepChange={test}>
      <TestPage />
      <TestPage />
      <TestPage />
      <TestPage />
    </Wizard>
  );
};
