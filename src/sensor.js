import React, { useState } from 'react';
import { HiShieldCheck } from 'react-icons/hi';
import styled from 'styled-components';
const Sensor = ({ sensor, status }) => {
  console.log('sensor', sensor);


  export const SensorWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  `;

  export const Sensor = styled.p`
    font-size: 1rem;
    font-weight: 500;
  `;
  export const SensorStatus = styled(Sensor)`
    font-size: 1rem;
    font-weight: 500;
  `;

  export const Wrapper = styled.div`
    &:not(:last-of-type) {
      border-bottom: 3px solid #e4dbdb;
    }
  `;

  return (
    <Wrapper>
      <SensorWrapper>
        <Sensor>
          <HiShieldCheck />
          {sensor}
        </Sensor>
        <SensorStatus>{status}</SensorStatus>
      </SensorWrapper>
    </Wrapper>
  );
};

export default Sensor;
