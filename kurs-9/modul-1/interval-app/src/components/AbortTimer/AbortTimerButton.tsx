import { useOutletContext, useNavigate } from 'react-router-dom';
import { OutletContext } from '../../types/types.ts';

export default function AbortTimerButton() {
  const { timer, breakTimer } = useOutletContext<OutletContext>();
  const navigate = useNavigate();

  const handleClick = () => {
    timer.stop();
    breakTimer.stop();
    navigate('/interval');
  };

  return (
    <button className="button" onClick={handleClick}>
      Abort timer
    </button>
  );
}
