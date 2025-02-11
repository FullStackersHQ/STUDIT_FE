import ModalOverlay from '../ModalOverlay';
import Button from '../Button';
import { NavigateFunction } from 'react-router-dom';

export default function DeleteModal({
  isOpen,
  close,
  text,
  navigate,
}: {
  isOpen: boolean;
  close: () => void;
  text: string;
  navigate: NavigateFunction;
}) {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <section className="modal-container h-[267px] justify-evenly">
        <p className="text-main mb-4 font-bold">{text} </p>
        <p>버튼 클릭 시 메인페이지로 이동합니다.</p>

        <Button
          text="이동하기"
          onClick={() => {
            close();
            navigate('/', { replace: true });
          }}
        />
      </section>
    </ModalOverlay>
  );
}
