import React, { useState } from 'react';
import { HiShieldCheck } from 'react-icons/hi';
import styled from 'styled-components';
import { ButtonWrapper } from './door.js';
const Sensor = ({ sensor, status }) => {
  console.log('sensor', sensor);

  const [panel, setPanel] = useState(false);

  const SensorWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  `;

  const Sensor = styled.p`
    font-size: 1rem;
    font-weight: 500;
  `;
  const SensorStatus = styled(Sensor)`
    font-size: 1rem;
    font-weight: 500;
  `;

  const Wrapper = styled.div`
    &:not(:last-of-type) {
      border-bottom: 2px solid gray;
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
