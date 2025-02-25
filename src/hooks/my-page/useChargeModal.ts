import { useState } from 'react';
import useChargePoint from './useChargePoint';
import useToastStore from '../../store/useToastStore';

export default function useChargeModal(close: () => void, userId: number) {
  const [inputPoint, setInputPoint] = useState(0);
  const [shaking, setShaking] = useState(false);
  const { showToast } = useToastStore();
  const { chargePoint } = useChargePoint(inputPoint, userId);
  const isInputInValid = inputPoint < 100 || inputPoint % 100 !== 0;

  const handleInput = () => {
    if (isInputInValid) {
      setShaking(true);
      setTimeout(() => setShaking(false), 300);
    } else {
      chargePoint();
      showToast(inputPoint.toLocaleString() + ' P가 충전됐어요 !', true);
      close();
    }
  };
  return { inputPoint, setInputPoint, shaking, handleInput };
}
