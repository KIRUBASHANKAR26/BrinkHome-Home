import React from 'react';
import ButtonGroup from '@ramonak/react-button-group';
import '@ramonak/react-button-group/dist/index.css';
import './style.css';
import styled from 'styled-components';

const TempertureInfoPrimary = styled.span`
  color: #c83d34;
  font-size: 1.2rem;
  border-radius: 50%;
  box-shadow: 0px 0px 1px 2px #c83d34;
  padding: 1rem;
  font-weight: 600;
`;
const TempMidInfo = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  top: 2rem;
`;

const TempertureInfoSec = styled(TempertureInfoPrimary)`
  color: #fff;
  box-shadow: 0px 0px 1px 2px #4e9fbd;
  background: #4e9fbd;
`;
const TempInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
const Example = () => {
  const handleClick = e => {
    console.log(e.target.name);
  };

  return (
    <>
      <TempInfoWrapper>
        <TempertureInfoPrimary>68{'\u00b0'}</TempertureInfoPrimary>
        <TempMidInfo>
          <span>74{'\u00b0'}</span>
          <span>40%</span>
          <span>Inside</span>
        </TempMidInfo>
        <TempertureInfoSec>74{'\u00b0'}</TempertureInfoSec>
      </TempInfoWrapper>

      <h2 style={{ marginTop: '2rem' }}>Thermostat</h2>
      <ButtonGroup
        buttonClassName="btns"
        containerClassName="buttonWrapper"
        activeButtonClassName="selected"
        buttons={['TEMP', 'MODE', 'PRESENT']}
        onButtonClick={handleClick}
      />
    </>
  );
};

export default Example;
