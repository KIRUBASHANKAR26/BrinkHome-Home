import React from 'react';
import { HiShieldCheck } from 'react-icons/hi';
import styled from 'styled-components';

export const SensorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const Sensor = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-left:1rem;
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
const Sensors = ({ sensor, status }) => {
  console.log('sensor', sensor);

  return (
    <Wrapper>
      <SensorWrapper>
        <Sensor>
          <HiShieldCheck style={{marginRight:'1rem'}}/>
          {sensor}
        </Sensor>
        <SensorStatus>{status}</SensorStatus>
      </SensorWrapper>
    </Wrapper>
  );
};

export default Sensors;
