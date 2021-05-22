import { EndPage } from './EndPage';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { StartPage } from './StartPage';
import { Wizard } from '../Wizard';
import { TestPage } from './TestPage';
import { TestData, testDataGroup, TestDataGroupType } from '../data/testDataGroup';
import { WizardContext } from '../Wizard/WizardContext';
import { ProgressBar } from './ProgressBar';
import styled from 'styled-components';

const TestWizardContainer = styled.div`
  display: block;
  max-width: 300px;
  transition: opacity 1s ease-in-out;
`;

const TestWizardHead = styled.div`
  margin-bottom: auto;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
`;

const TestWizardBody = styled.div`
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
`;

const PreviousButton = styled.button`
  display: flex;
  border: 1px solid #ff4e68;
  box-sizing: border-box;
  background: #ff4e68;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
  margin: 10px 0;
  /* padding: 2px; */
  width: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

type SelectedTestData = TestData & { step: number };

type Props = {};

export const TestWizard: React.FC<Props> = () => {
  const [currentStep, setCurrentStpe] = useState(0);
  const [selectedTestDataGroup, setSelectedTestDataGroup] = useState<SelectedTestData[]>([]);
  const isStartPage = useMemo(() => currentStep === 0, [currentStep]);
  const isLastPage = useMemo(() => currentStep === testDataGroup.length + 1, [currentStep]);

  const handlePreviousButtonClick = useCallback(() => {
    setCurrentStpe(currentStep - 1);
  }, [currentStep]);

  const handleNextButtonClick = useCallback(
    (nextTestData?: SelectedTestData) => {
      setCurrentStpe(currentStep + 1);
      if (nextTestData) {
        const nextSelectedTestDataGroup = [...selectedTestDataGroup];
        const foundedIdx = nextSelectedTestDataGroup.findIndex(
          (nextSelectedTestData) => nextSelectedTestData.step === nextTestData.step
        );

        if (foundedIdx > -1) {
          nextSelectedTestDataGroup[foundedIdx] = nextTestData;
        } else {
          nextSelectedTestDataGroup.push(nextTestData);
        }
        setSelectedTestDataGroup(nextSelectedTestDataGroup);
      }
    },
    [currentStep, selectedTestDataGroup]
  );

  const getSelectedData = useCallback(
    (nextTestData?: TestDataGroupType) => {
      const founded = selectedTestDataGroup.find(
        (nextSelectedTestData) => nextSelectedTestData.step === nextTestData?.step
      );

      return founded;
    },
    [selectedTestDataGroup]
  );

  return (
    <TestWizardContainer>
      {!isStartPage && !isLastPage && (
        <TestWizardHead>
          <PreviousButton onClick={() => handlePreviousButtonClick()}>이전</PreviousButton>
          <ProgressBar currentStep={currentStep} totalStep={testDataGroup.length} />
        </TestWizardHead>
      )}
      <TestWizardBody>
        <Wizard currentStep={currentStep}>
          <StartPage onNextButtonClick={handleNextButtonClick} />
          {testDataGroup.map((testData) => (
            <TestPage
              key={`test-page-${testData.step}`}
              selectedData={getSelectedData(testData)}
              testData={testData}
              onNextButtonClick={handleNextButtonClick}
            />
          ))}
          <EndPage selectedTestDataGroup={selectedTestDataGroup} />
        </Wizard>
      </TestWizardBody>
    </TestWizardContainer>
  );
};
