import { createContext } from 'react';

type WizardContextType = {
  currentStep: number;
  totalStep: number;
  onNextButtonClick(): void;
  onPreviousButtonClick(): void;
};

export const WizardContext = createContext<WizardContextType>({
  currentStep: 0,
  totalStep: 0,
  onNextButtonClick: () => {},
  onPreviousButtonClick: () => {},
});
