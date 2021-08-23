import React from 'react';
import { SensorWrapper, Wrapper } from './sensor.js';
import { HiShieldCheck } from 'react-icons/hi';
import styled from 'styled-components';

const Labelwrapper = styled.div``;
const Label = styled.div`
  font-weight: 600;
`;
const Status = styled.div`
  font-weight: 700;
  letter-spacing: 1px;
`;

const Recentactivity = ({ time, status, label }) => {
  console.log(time, status, label);
  return (
    <Wrapper>
      <SensorWrapper>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <HiShieldCheck style={{ marginRight: '1rem' }} />
          <Labelwrapper>
            <Label>{label}</Label>
            <Label>{time}</Label>
          </Labelwrapper>
        </div>

        <Status>{status}</Status>
      </SensorWrapper>
    </Wrapper>
  );
};

export default Recentactivity;
