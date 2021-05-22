import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProgressBarItem = styled.li<{ isOn: boolean }>`
  height: 3px;
  background: ${(props) => (props.isOn ? '#FF4E68' : ' #545454')};
  flex: 1;
  margin-right: 3px;
  transition: all 0.5s;
`;

const ProgressBarList = styled.ul`
  text-align: center;
  font-size: 0;
  display: flex;
  flex-direction: row;
  padding-inline-start: 0;
`;

type Props = {
  currentStep: number;
  totalStep: number;
};

export const ProgressBar: React.FC<Props> = ({ currentStep, totalStep }) => {
  const [steps] = useState<Array<number>>(new Array(totalStep).fill(totalStep));

  return (
    <ProgressBarList>
      {steps.map((step, stepIdx) => (
        <ProgressBarItem isOn={stepIdx < currentStep} key={`item-${stepIdx}`} />
      ))}
    </ProgressBarList>
  );
};
