import './MenuButton.scss';

export default function MenuButton({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <svg
      onClick={onClick}
      className={'menu-button ' + (className ?? '')}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="32"
        width="12"
        height="32"
        transform="rotate(90 32 0)"
        fill="#222222"
      />
      <rect
        x="32"
        y="14"
        width="8"
        height="32"
        transform="rotate(90 32 14)"
        fill="#222222"
      />
      <rect
        x="32"
        y="24"
        width="4"
        height="32"
        transform="rotate(90 32 24)"
        fill="#222222"
      />
      <rect
        x="32"
        y="30"
        width="2"
        height="32"
        transform="rotate(90 32 30)"
        fill="#222222"
      />
    </svg>
  );
}
