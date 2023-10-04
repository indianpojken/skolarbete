import './Checkbox.scss';

export default function Checkbox({
  label,
  state,
  setState,
}: {
  label: string;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <article className="checkbox">
      <section
        className={
          `checkbox__box` +
          (state ? ' checkbox--active' : ' checkbox--inactive')
        }
        onClick={() => setState(!state)}
      >
        {state && (
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.0104 0.489591C12.6199 0.0990661 11.9867 0.0990665 11.5962 0.489591L7 5.08578L2.40381 0.48959C2.01328 0.0990658 1.38012 0.0990661 0.989593 0.48959C0.599069 0.880115 0.599069 1.51328 0.989593 1.9038L5.58579 6.5L0.989592 11.0962C0.599069 11.4867 0.599068 12.1199 0.989592 12.5104C1.38012 12.9009 2.01328 12.9009 2.40381 12.5104L7 7.91421L11.5962 12.5104C11.9867 12.9009 12.6199 12.9009 13.0104 12.5104C13.4009 12.1199 13.4009 11.4867 13.0104 11.0962L8.41421 6.5L13.0104 1.9038C13.4009 1.51328 13.4009 0.880115 13.0104 0.489591Z"
              fill="white"
            />
          </svg>
        )}
      </section>
      <header>
        <span className="checkbox__label">{label}</span>
      </header>
    </article>
  );
}
