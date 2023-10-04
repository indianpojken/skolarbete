import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useTimer from 'easytimer-react-hook';

import TimesUp from '../../components/TimesUp/TimesUp.tsx';

import './../../style.scss';
import './Root.scss';
import Break from '../../components/Break/Break.tsx';

export default function Root() {
  const [isIntervalMode, setIsIntervalMode] = useState(true);

  const [timer, isTargetAchieved] = useTimer({
    updateWhenTargetAchieved: true,
  });

  const [breakTimer, breakTimerAchived] = useTimer({
    updateWhenTargetAchieved: true,
  });

  useEffect(() => {
    if (isIntervalMode && isTargetAchieved) {
      timer.reset();
    }
  }, [isTargetAchieved]);

  return (
    <div className="app">
      {isTargetAchieved && <TimesUp timer={timer} />}
      {breakTimerAchived && <Break timer={timer} breakTimer={breakTimer} />}
      <Outlet
        context={{ timer, breakTimer, isIntervalMode, setIsIntervalMode }}
      />
    </div>
  );
}
