import React from 'react';
import './style.css';
import Door from './door.js';
import Lamp from './lamp.js';
import {
  LampMock,
  PanelMock,
  SensorsAvailable,
  TempertureMock
} from './mock.js';
import { ButtonContainer } from './door.js';
import Panel from './panel.js';
import Sensor from './sensor.js';
import styled from 'styled-components';
import Temperature from './temperature.js';

export const SensorContainer = styled(ButtonContainer)`
  flex-direction: column;
`;
const App = () => {
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
      {PanelMock && <Panel panelStatus={PanelMock[0].panelStatus} />}
      <SensorContainer>
        <h2>Sensor</h2>
        {SensorsAvailable?.map(({ sensor, status }, index) => (
          <Sensor key={index} sensor={sensor} status={status} />
        ))}
      </SensorContainer>
      {/* <SensorContainer>
        <h2>Temperatures</h2>
        {TempertureMock?.map(({ lable, degree }, index) => (
          <Temperature key={index} lable={lable} degree={degree} />
        ))}
      </SensorContainer> */}
    </div>
  );
};

export default App;
