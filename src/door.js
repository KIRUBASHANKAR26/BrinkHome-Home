import React, { useState } from 'react';
import { IoIosLock, IoIosUnlock } from 'react-icons/io';
import styled from 'styled-components';

export const Button = styled.button`
  font-size: 4rem;
  color: ${({ status }) => (status ? '#5AB554' : '#C83D34')};
  border-radius: 50%;
  padding: 0.5rem 1rem;
  border: 2px solid ${({ status }) => (status ? '#5AB554' : '#C83D34')};
  background-color: transparent;
  cursor:pointer;
  outline:none;
`;
export const DoorStatus = styled(Button)`
  border: none;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.5px;
  padding: 0.5rem 0;
`;
export const ButtonWrapper = styled.div`
  display: inline-block;
`;
export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  justify-content: space-around;
  padding: 2rem;
  margin: 1rem;
  box-shadow: 0px 0px 10px 5px #f5f5f5;
`;
const Door = () => {
  const [frontDoor, setFrontDoor] = useState(false);
  const [backDoor, setBackDoor] = useState(false);

  const handleFrontDoor = () => {
    setFrontDoor(!frontDoor);
    console.log('frontDoor', frontDoor);
  };
  const handleBackDoor = () => {
    setBackDoor(!backDoor);
    console.log('backDoor', backDoor);
  };
  return (
    <ButtonContainer>
      <ButtonWrapper>
        <Button status={frontDoor} onClick={handleFrontDoor}>
          {frontDoor ? <IoIosUnlock /> : <IoIosLock />}
        </Button>
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>Front Door</p>
        <DoorStatus as="p" status={frontDoor}>
          {frontDoor ? 'Unlocked' : 'Locked'}
        </DoorStatus>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button status={backDoor} onClick={handleBackDoor}>
          {backDoor ? <IoIosUnlock /> : <IoIosLock />}
        </Button>
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>Back Door</p>
        <DoorStatus as="p" status={backDoor}>
          {backDoor ? 'Unlocked' : 'Locked'}
        </DoorStatus>
      </ButtonWrapper>
    </ButtonContainer>
  );
};

export default Door;
