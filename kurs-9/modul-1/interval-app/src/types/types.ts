import Timer from 'easytimer.js';

export interface OutletContext {
  timer: Timer;
  breakTimer: Timer;
  isIntervalMode: boolean;
  setIsIntervalMode: React.Dispatch<React.SetStateAction<boolean>>;
}
