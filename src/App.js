import React, { useState } from 'react';
import './style.css';
import Door from './door.js';
import Lamp from './lamp.js';
import {
  LampMock,
  PanelMock,
  SensorsAvailable,
  TempertureMock,
  ImageMock,
  RecentAciveMock
} from './mock.js';
import { ButtonContainer } from './door.js';
import Panel from './panel.js';
import Sensors from './sensor.js';
import styled from 'styled-components';
import Temperature from './temperature.js';
import Images from './Image.js';
import Thermostat from './Thermostat.js';
import Recentactivity from './recentActivity';
import 'antd/dist/antd.css';

export const SensorContainer = styled(ButtonContainer)`
  flex-direction: column;
`;
export const TempContainer = styled(ButtonContainer)`
  flex-direction: column;
  align-items: center;
`;
export const RecentContainer = styled(ButtonContainer)`
  flex-direction: column;
  max-height: 260px;
  overflow-y: auto;
  justify-content: start;
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
  const [panel, setPanel] = useState(false);
  const [RecentActive, setRecentActive] = useState(RecentAciveMock);

  const handlePanelClick = () => {
    setPanel(!panel);
    let panelInfo = {
      label: 'Panel',
      status: panel ? 'DISARMED' : 'ARMED',
      time: 'Just Now'
    };
    RecentActive.unshift(panelInfo);
    setRecentActive(RecentActive);
  };
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
      {PanelMock && (
        <Panel
          panelStatus={PanelMock[0].panelStatus}
          handlePanelClick={handlePanelClick}
          panel={panel}
        />
      )}
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
      <TempContainer flex-direction="coloum">
        <Thermostat />
      </TempContainer>
      <RecentContainer>
        <h2>Recent Activity</h2>
        {RecentActive?.map(({ label, status, time }, index) => (
          <Recentactivity
            key={index}
            label={label}
            status={status}
            time={time}
          />
        ))}
      </RecentContainer>
    </div>
  );
};

export default App;
