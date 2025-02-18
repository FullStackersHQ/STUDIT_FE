import { useState } from 'react';
import useWithdrawPoint from './useWithdrawPoint';

export default function useWithdrawModal(close: () => void, currentPoint: number) {
  const [inputPoint, setInputPoint] = useState(0);
  const [shaking, setShaking] = useState(false);

  const { withdrawPoint } = useWithdrawPoint(inputPoint);
  const isInputInValid = inputPoint < 1000 || inputPoint % 1000 !== 0;
  const [notification, setNotification] = useState('*출금은 1,000P 단위로 가능해요');

  const handleInput = () => {
    if (isInputInValid) {
      setShaking(true);
      setTimeout(() => setShaking(false), 300);
    } else if (currentPoint < inputPoint) {
      setNotification('포인트가 부족해요.');
      setShaking(true);
      setTimeout(() => setShaking(false), 300);
    } else {
      withdrawPoint();
      close();
    }
  };
  return { inputPoint, setInputPoint, shaking, handleInput, notification };
}
