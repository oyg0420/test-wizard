import React, { useCallback, useContext } from 'react';
import { PageContainer, PageContent, PageButton, PageButtonGroup, PageContentDescription } from '../Layout';
import { WizardContext } from '../Wizard/WizardContext';
import { TestData, TestDataGroupType } from '../data/testDataGroup';

type SelectedTestData = TestData & { step: number };

type Props = {
  testData: TestDataGroupType;
  selectedData?: SelectedTestData;
  onNextButtonClick(nextTestData?: SelectedTestData): void;
};

export const TestPage: React.FC<Props> = ({ testData, selectedData, onNextButtonClick }) => (
  <PageContainer>
    <PageContent>
      <PageContentDescription>{testData.description}</PageContentDescription>
      <PageButtonGroup>
        {testData.data.map((quiz) => (
          <PageButton
            selected={selectedData?.value === quiz.value}
            key={`page-button-${quiz.value}`}
            onClick={() => onNextButtonClick({ ...quiz, step: testData.step })}
          >
            {quiz.label}
          </PageButton>
        ))}
      </PageButtonGroup>
    </PageContent>
  </PageContainer>
);
