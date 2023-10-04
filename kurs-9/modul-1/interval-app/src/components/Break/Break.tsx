import { useEffect } from 'react';
import { redirect } from 'react-router-dom';
import Timer from 'easytimer.js';

import Overlay from '../Overlay/Overlay.tsx';

import './Break.scss';
import { formatTime } from '../../utils/formatTime.ts';

export default function Break({
  timer,
  breakTimer,
}: {
  timer: Timer;
  breakTimer: Timer;
}) {
  const onClick = () => {
    breakTimer.reset();
    timer.start();
    redirect('/digital');
  };

  useEffect(() => timer.pause(), []);

  return (
    <Overlay>
      <article className="times-up">
        <svg
          width="40"
          height="50"
          viewBox="0 0 40 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="12" height="50" rx="6" fill="white" />
          <rect x="28" width="12" height="50" rx="6" fill="white" />
        </svg>

        <p className="times-up__label">Pause & breath</p>
        <p className="times-up__time-remaining">
          {formatTime(timer.getTimeValues())}
        </p>
        <button className="button button--bright" onClick={onClick}>
          No pause, go now!
        </button>
      </article>
    </Overlay>
  );
}
