import React, { useState } from 'react';
import { RiLightbulbFlashFill, RiLightbulbFill } from 'react-icons/ri';
import {Button,ButtonWrapper} from './door';

import styled from 'styled-components';


const LampButton = styled(Button)`
  color: ${({ status }) => (status ? 'yellow' : 'gray')};
  border:none;
  box-shadow: 0px 0px 10px 5px ${({ status }) => (status ? 'rgba(216,216,46,0.68)' : '#F5F5F5')};
`

const LightPercentage = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-item:center;
  color: ${({ status }) => (status ? 'yellow' : 'gray')};
  text-align:center; 
  font-size:1.5rem;
  font-weight:600;
`
const Lamp = ({lampLable,lampPercentage}) => {
  console.log('lampLable',lampLable)
  const [lamp,setLamp] = useState(true);

  const handleLightClicking = () => {
    setLamp(!lamp);
  }
  return (
    <ButtonWrapper>{
      lamp ? 
      <LampButton status={lamp} onClick={handleLightClicking}>
        <RiLightbulbFlashFill/>
      </LampButton>:
      <LampButton status={lamp} onClick={handleLightClicking}>
        <RiLightbulbFill/>
      </LampButton>
    }
    <span style={{fontWeight:'600'}}>{lampLable}</span>
    <LightPercentage status={lamp}>{lampPercentage}</LightPercentage>
    </ButtonWrapper>
    
  );
};

export default Lamp;
