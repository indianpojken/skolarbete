import './Overlay.scss';

export default function Overlay({ children }: { children: React.ReactNode }) {
  return <main className="overlay">{children}</main>;
}
