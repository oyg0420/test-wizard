import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PageContainer, PageTitle, PageContent, PageContentDescription } from '../Layout';
import ClipLoader from 'react-spinners/ClipLoader';
import { resultDataGroup } from '../data/resultDataGroup';
import { TestData } from '../data/testDataGroup';

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 20px;
  border-radius: 100px;
`;

type SelectedTestData = TestData & { step: number };

type Props = {
  selectedTestDataGroup: SelectedTestData[];
};

export const EndPage: React.FC<Props> = ({ selectedTestDataGroup }) => {
  const [isLoading, toggleIsLoading] = useState(true);
  const [totalValue, setTotalValue] = useState(0);
  const [resultData, setResultData] = useState<{ name: string; title: string; description: string; url: string }>();

  useEffect(() => {
    let nextTotalValue = 0;
    selectedTestDataGroup.map((selectedTestData) => {
      nextTotalValue += selectedTestData.value;
      return '';
    });

    setTotalValue(nextTotalValue);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      toggleIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    let nextResultData;
    if (totalValue === 0) {
      nextResultData = resultDataGroup['연철민'];
    }
    if (totalValue === 1) {
      nextResultData = resultDataGroup['이성재'];
    }
    if (totalValue === 2) {
      nextResultData = resultDataGroup['이철용'];
    }
    if (totalValue === 3) {
      nextResultData = resultDataGroup['이태균'];
    }
    if (totalValue === 4) {
      nextResultData = resultDataGroup['한성범'];
    }
    if (totalValue >= 5) {
      nextResultData = resultDataGroup['김동휘'];
    }
    setResultData(nextResultData);
  }, [totalValue]);

  if (isLoading) {
    return <ClipLoader color="#ff4e68" loading={isLoading} size={150} />;
  }

  return (
    <PageContainer>
      <ProfileImage src={resultData?.url} />
      <PageTitle>{resultData?.name}</PageTitle>
      <PageContent>
        <PageContentDescription>{resultData?.title}</PageContentDescription>
      </PageContent>
    </PageContainer>
  );
};
