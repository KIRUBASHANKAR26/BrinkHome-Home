import React, { useState } from 'react';
import { RiLightbulbFlashFill, RiLightbulbFill } from 'react-icons/ri';
import {Button,ButtonWrapper} from './door';

import styled from 'styled-components';


const LampButton = styled(Button)`
  color: ${({ status }) => (status ? 'yellow' : 'gray')};
  border:none;
  box-shadow: 0px 0px 3px 4px ${({ status }) => (status ? 'rgba(216,216,46,0.68)' : 'gray')};
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
    <p style={{fontWeight:'600',padding: '1rem 0.5rem'}}>{lampLable}</p>
    <LightPercentage status={lamp}>{lampPercentage}</LightPercentage>
    </ButtonWrapper>
    
  );
};

export default Lamp;
