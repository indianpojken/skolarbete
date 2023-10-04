import { useOutletContext } from 'react-router-dom';
import Timer from 'easytimer.js';

import Header from '../../components/Header/Header.tsx';
import AbortTimerButton from '../../components/AbortTimer/AbortTimerButton.tsx';

import { formatTime } from '../../utils/formatTime.ts';

import './Digital.scss';
import '../../style.scss';

export default function Digital() {
  const { timer } = useOutletContext<{ timer: Timer }>();

  return (
    <section className="container">
      <Header label="Interval" />
      <main className="container__content">
        <h1 className="digital-clock">{formatTime(timer.getTimeValues())}</h1>
        <AbortTimerButton />
      </main>
    </section>
  );
}
