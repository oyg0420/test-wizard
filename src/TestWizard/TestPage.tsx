import React, { useContext } from 'react';
import { WizardContext } from '../Wizard/WizardContext';

export const TestPage: React.FC = () => {
  const { onNextButtonClick, onPreviousButtonClick, currentStep } = useContext(WizardContext);
  return (
    <div>
      {currentStep + 1}
      <button onClick={onPreviousButtonClick}>이전</button>
      <button onClick={onNextButtonClick}>다음</button>
    </div>
  );
};
