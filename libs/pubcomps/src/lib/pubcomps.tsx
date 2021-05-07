import React from 'react';
import { core } from '@spike/core';
import { webcore } from '@spike/webcore';

import './pubcomps.module.css';

/* eslint-disable-next-line */
export interface PubcompsProps {}

export function Pubcomps(props: PubcompsProps) {
  return (
    <div>
      <h1>Welcome to pubcomps!</h1>
      <div>
        {' '}
        Core:
        {core()}
      </div>
      <div>
        {' '}
        WebCore:
        {webcore()}
      </div>
    </div>
  );
}

export default Pubcomps;
