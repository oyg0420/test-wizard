import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { WizardContext } from './WizardContext';

type Props = {
  onStepChange(): void;
};

export const Wizard: React.FC<Props> = ({ onStepChange, children }) => {
  const [step, setStep] = useState(0);
  const [totalStep, setTotalStep] = useState(0);
  const [childNodes, setChildNodes] = useState<ReactNode[]>([]);
  const [currentChildNode, setCurrentChildNode] = useState<ReactNode>();
  const isFirstStep = useMemo(() => step === 0, [step]);
  const isLastStep = useMemo(() => step === totalStep - 1, [step, totalStep]);

  const handlePreviousButtonClick = useCallback(() => {
    if (isFirstStep === false) {
      setStep(step - 1);
    }
  }, [step, isFirstStep]);

  const handleNextButtonClick = useCallback(() => {
    console.log(step);
    if (isLastStep) {
      onStepChange();
    } else {
      setStep(step + 1);
    }
  }, [step, isLastStep, onStepChange]);

  useEffect(() => {
    if (children) {
      setChildNodes(React.Children.toArray(children));
    }
  }, [children]);

  useEffect(() => {
    setTotalStep(childNodes.length);
  }, [childNodes]);

  useEffect(() => {
    setCurrentChildNode(childNodes[step]);
  }, [childNodes, step]);

  return (
    <>
      <WizardContext.Provider
        value={{
          currentStep: step,
          totalStep,
          onNextButtonClick: handleNextButtonClick,
          onPreviousButtonClick: handlePreviousButtonClick,
        }}
      >
        {currentChildNode}
      </WizardContext.Provider>
    </>
  );
};
