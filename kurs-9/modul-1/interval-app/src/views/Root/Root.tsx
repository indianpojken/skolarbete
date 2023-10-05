import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useTimer from 'easytimer-react-hook';

import TimesUp from '../../components/TimesUp/TimesUp.tsx';

import './../../style.scss';
import './Root.scss';
import Break from '../../components/Break/Break.tsx';

export default function Root() {
  const [isIntervalMode, setIsIntervalMode] = useState(false);
  const [isBreakMode, setIsBreakMode] = useState(false);

  const [timer, isTargetAchieved] = useTimer({
    updateWhenTargetAchieved: true,
  });

  const [breakTimer, breakTimerAchieved] = useTimer({
    updateWhenTargetAchieved: true,
  });

  useEffect(() => {
    if (isIntervalMode && isTargetAchieved) {
      if (isBreakMode) {
        timer.pause();

        breakTimer.start({
          startValues: { minutes: 5 },
          countdown: true,
          precision: 'seconds',
        });
      } else {
        timer.reset();
      }
    }
  }, [isTargetAchieved]);

  useEffect(() => {
    if (breakTimerAchieved) {
      timer.reset();
    }
  }, [breakTimerAchieved]);

  return (
    <div className="app">
      {isTargetAchieved && <TimesUp timer={timer} />}
      {breakTimer.isRunning() && (
        <Break timer={timer} breakTimer={breakTimer} />
      )}
      <Outlet
        context={{
          timer,
          breakTimer,
          isIntervalMode,
          setIsIntervalMode,
          isBreakMode,
          setIsBreakMode,
        }}
      />
    </div>
  );
}
