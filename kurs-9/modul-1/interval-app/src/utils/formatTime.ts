import { TimeCounter } from 'easytimer.js';

export function formatTime(time: TimeCounter) {
  const minutes = time.minutes;
  const seconds = time.seconds < 10 ? `0${time.seconds}` : time.seconds;

  return `${minutes}:${seconds}`;
}
