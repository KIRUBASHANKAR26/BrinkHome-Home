import React from 'react';
import './style.css';
import Door from './door.js';
import Lamp from './lamp.js';
import {
  LampMock,
  PanelMock,
  SensorsAvailable,
  TempertureMock,
  ImageMock
} from './mock.js';
import { ButtonContainer } from './door.js';
import Panel from './panel.js';
import Sensors from './sensor.js';
import styled from 'styled-components';
import Temperature from './temperature.js';
import Images from './Image.js';
import 'antd/dist/antd.css';

export const SensorContainer = styled(ButtonContainer)`
  flex-direction: column;
`;
const NoImages = styled.div`
  background: #000;
  width: 100%;
  max-width: 500px;
  height: 230px;
  border-radius: 4px;
  position: relative;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
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
          <Sensors key={index} sensor={sensor} status={status} />
        ))}
      </SensorContainer>
      <SensorContainer>
        <h2>Temperatures</h2>
        {TempertureMock?.map(({ label, degree }, index) => (
          <Temperature key={index} label={label} degree={degree} />
        ))}
      </SensorContainer>

      {ImageMock.length ? (
        ImageMock?.map(({ src }, index) => <Images key={index} url={src} />)
      ) : (
        <NoImages>No Recent Images</NoImages>
      )}
    </div>
  );
};

export default App;
