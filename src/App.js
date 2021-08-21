import React from 'react';
import './style.css';
import Door from './door.js';
import Lamp from './lamp.js';
import { LampMock } from './mock.js';
import { ButtonContainer } from './door.js';

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
    </div>
  );
}
