import React from 'react';
import { HiShieldCheck } from 'react-icons/hi';
import { SensorWrapper, Sensor, Wrapper, SensorStatus } from './sensor.js';

const Temperature = ({ label, degree }) => {
  console.log('label', label);

  return (
    <Wrapper>
      <SensorWrapper>
        <Sensor>
          <HiShieldCheck style={{ marginRight: '1rem' }} />
          {label}
        </Sensor>
        <SensorStatus>
          {degree}
          {'\u00b0'}
        </SensorStatus>
      </SensorWrapper>
    </Wrapper>
  );
};

export default Temperature;
