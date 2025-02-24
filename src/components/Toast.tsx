import useToastStore from '../store/useToastStore';
import { useEffect } from 'react';
import CloseIcon from '../assets/icons/close.svg';
import CheckIcon from '../assets/icons/check.svg';

export default function Toast() {
  const { message, isVisible, hideToast, hasFnb } = useToastStore();

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => hideToast(), 3000);
    return () => clearTimeout(timer);
  }, [isVisible, hideToast]);

  if (!isVisible) return null;

  return (
    <section
      className={`fixed right-4 ${hasFnb ? 'bottom-20' : 'bottom-10'} z-[999] flex w-[calc(100%-32px)] items-center rounded-lg bg-black p-2.5 font-medium text-white opacity-95 transition-transform ${isVisible ? 'toast-slide-in' : 'toast-slide-out'}`}
    >
      <div className="flex h-[18px] w-full items-center justify-between">
        <div className="flex items-center gap-x-2">
          <CheckIcon alt="토스트" className="h-[18px] w-[18px]" />
          <p className="text-sm">{message}</p>
        </div>
        <button
          onClick={hideToast}
          className="hover:text-white-gray text-xs text-white transition-colors"
          aria-label="토스트 닫기"
        >
          <CloseIcon alt="토스트 닫기" className="h-3 w-3" />
        </button>
      </div>
    </section>
  );
}
