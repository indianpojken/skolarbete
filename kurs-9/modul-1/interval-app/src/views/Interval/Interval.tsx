import SetTimer from '../../components/SetTimer/SetTimer.tsx';
import Header from '../../components/Header/Header.tsx';
import '../../style.scss';

export default function Interval() {
  return (
    <section className="container">
      <Header />
      <main className="container__content">
        <SetTimer />
      </main>
    </section>
  );
}
