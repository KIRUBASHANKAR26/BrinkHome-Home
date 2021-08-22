import React, { useState } from 'react';
import { HiShieldCheck } from 'react-icons/hi';
import { SensorWrapper,Sensor,Wrapper,SensorStatus } from './sensor.js'


const Temperature = ({ sensor, degree }) => {
 

  return (
    <Wrapper>
      <SensorWrapper>
        <Sensor>
          <HiShieldCheck />
          {label}
        </Sensor>
        <SensorStatus>{degree}</SensorStatus>
      </SensorWrapper>
    </Wrapper>
  );
};

export default Temperature;
