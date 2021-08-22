import React from 'react';
import './style.css';
import Door from './door.js';
import Lamp from './lamp.js';
import { LampMock,PanelMock } from './mock.js';
import { ButtonContainer } from './door.js';
import Panel from './panel.js';

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
      
    </div>
  );
}
