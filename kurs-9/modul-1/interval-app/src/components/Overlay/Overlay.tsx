import './Overlay.scss';

export default function Overlay({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <main className={'overlay ' + (className ?? '')}>{children}</main>;
}
