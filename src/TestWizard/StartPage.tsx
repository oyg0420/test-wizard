import React, { useContext } from 'react';
import styled from 'styled-components';
import { PageContent, PageContainer, PageContentDescription } from '../Layout';

const StartPageContentDescription = styled(PageContentDescription)`
  span {
    font-weight: 600;
    display: block;
    font-size: 1.45em;
  }
`;

const StartPageButton = styled.button`
  cursor: pointer;
  background: #ff4e68;
  color: #fff;
  width: 260px;
  line-height: 65px;
  border-radius: 15px;
  font-size: 1.875em;
  font-weight: 500;
`;

type Props = { onNextButtonClick(): void };

export const StartPage: React.FC<Props> = ({ onNextButtonClick }) => (
  <PageContainer>
    <PageContent>
      <StartPageContentDescription>
        나의 인스타 <span>자아는?</span>
      </StartPageContentDescription>
    </PageContent>
    <StartPageButton onClick={() => onNextButtonClick()}>시작하기</StartPageButton>
  </PageContainer>
);
