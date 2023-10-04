import { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

import IntervalSelector from '../IntervalSelector/IntervalSelector.tsx';
import Checkbox from '../Checkbox/Checkbox.tsx';

import { OutletContext } from '../../types/types.ts';

import '../../style.scss';

export default function SetTimer() {
  const [minutes, setMinutes] = useState(1);
  const [isBreakMode, setIsBreakMode] = useState(false);

  const { timer, breakTimer, isIntervalMode, setIsIntervalMode } =
    useOutletContext<OutletContext>();

  const navigate = useNavigate();

  const handleSubmit = () => {
    timer.stop();
    breakTimer.stop();

    timer.start({
      startValues: { minutes },
      countdown: true,
      precision: 'seconds',
    });

    if (isBreakMode) {
      breakTimer.start({
        startValues: { minutes: 5 },
        countdown: true,
        precision: 'seconds',
      });
    }

    navigate('/digital');
  };

  return (
    <article>
      <IntervalSelector
        state={minutes}
        setState={setMinutes}
        unit="minute(s)"
      />

      <Checkbox
        label="Intervals"
        state={isIntervalMode}
        setState={setIsIntervalMode}
      />

      <Checkbox
        label="5 min break / interval"
        state={isBreakMode}
        setState={setIsBreakMode}
      />

      <button className="button button--submit" onClick={handleSubmit}>
        start timer
      </button>
    </article>
  );
}
