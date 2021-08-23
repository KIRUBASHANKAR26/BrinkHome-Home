import React,{useState} from 'react';
import { ButtonContainer,Button,ButtonWrapper,DoorStatus } from './door.js';
import { HiShieldCheck } from 'react-icons/hi';
import styled from 'styled-components';

const Panel = ({panelStatus,handlePanelClick,panel}) => {

  return(
    <ButtonContainer>
      <ButtonWrapper>
      <Button status={panel} onClick={handlePanelClick} >
        <HiShieldCheck/>
      </Button>
      <p style={{fontWeight:'600',textAlign:'center',fontSize:'1.2rem'}}>Panel</p>
      <DoorStatus as="p" status={panel}>
          {panel ? panelStatus : `DIS${panelStatus}`}
        </DoorStatus>
      </ButtonWrapper>
    </ButtonContainer>
  );


}


export default Panel;