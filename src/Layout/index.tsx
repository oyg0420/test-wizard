import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageTitle = styled.div`
  font-weight: 600;
  color: #ff4e68;
  font-size: 2.188em;
`;

export const PageContent = styled.div`
  margin-bottom: 50px;
  transition: all 0.5s;
`;

export const PageContentDescription = styled.div`
  font-weight: 500;
  font-size: 1.813em;
  color: #fff;
  margin-bottom: 50px;
`;

export const PageButtonGroup = styled.div`
  display: block;
`;

export const PageButton = styled.button<{ selected?: boolean }>`
  display: block;
  border: 1px solid #ff4e68;
  font-weight: 500;
  box-sizing: border-box;
  ${(props) =>
    props.selected
      ? `
      background: #ff4e68;
    color: #fff;`
      : `
   background: #1e1e1e;
  color: #ff4e68;
  `};

  font-size: 1.188em;
  cursor: pointer;
  width: 100%;
  margin: 15px auto 0;
  line-height: 1;
  min-height: 0;
  padding: 20px 10px 20px;
  transition: all 0.3s;
  line-height: 1.5;
  font-weight: 600;
  transform: skew(-0.001deg);
`;
