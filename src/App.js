import React from 'react';
import './style.css';
import Door from './door.js';
import Lamp from './lamp.js';
import { LampMock,PanelMock,SensorsAvailable } from './mock.js';
import { ButtonContainer } from './door.js';
import Panel from './panel.js';
import Sensor from './sensor.js';
import styled from 'styled-components';

export const SensorContainer = styled(ButtonContainer)`
  flex-direction:column;

`;
export default function App() {
  return (
    <div>
      <Door />
      <ButtonContainer>
        {LampMock?.map(({ lampLable, lampPercentage }, index) => (
          <Lamp
            key={index}
            lampLable={lampLable}
            lampPercentage={lampPercentage}
          />
        ))}
      </ButtonContainer>
      {

        PanelMock && 
        <Panel panelStatus={PanelMock[0].panelStatus}/>
      }
      <SensorContainer>
        Sensor
        {SensorsAvailable?.map(({ sensor, status }, index) => (
          <Sensor
            key={index}
            sensor={sensor}
            status={status}
          />
        ))}
      </SensorContainer>
      
    </div>
  );
}
