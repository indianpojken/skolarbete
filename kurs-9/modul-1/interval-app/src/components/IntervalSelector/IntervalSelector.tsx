import './IntervalSelector.scss';

const enum NumericChange {
  Increase,
  Decrease,
}

export default function IntervalSelector({
  state,
  setState,
  unit,
}: {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
  unit?: string;
}) {
  const handleClick = (direction: NumericChange) => {
    switch (direction) {
      case NumericChange.Decrease: {
        if (state > 1) {
          setState(state - 1);
        }
        break;
      }
      case NumericChange.Increase: {
        setState(state + 1);
        break;
      }
    }
  };

  return (
    <article className="interval-selector">
      <section className="interval-selector__inputs">
        <aside>
          <button
            type="button"
            className="interval-selector__button"
            onClick={() => handleClick(NumericChange.Decrease)}
          >
            <svg
              width="18"
              height="30"
              viewBox="0 0 18 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 1.5L2.25 15L15.75 28.5"
                stroke="#222222"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </aside>

        <section>
          <p className="interval-selector__input">{state}</p>
        </section>

        <aside>
          <button
            type="button"
            className="interval-selector__button"
            onClick={() => handleClick(NumericChange.Increase)}
          >
            <svg
              width="18"
              height="30"
              viewBox="0 0 18 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 28.5L15.75 15L2.25 1.50001"
                stroke="#222222"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </aside>
      </section>
      {unit && <section className="interval-selector__unit">{unit}</section>}
    </article>
  );
}
