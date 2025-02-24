import { create } from 'zustand';

interface ToastState {
  message: string;
  hasFnb: boolean;
  isVisible: boolean;
  showToast: (message: string, hasFnb: boolean) => void;
  hideToast: () => void;
}
const useToastStore = create<ToastState>((set) => ({
  message: '',
  hasFnb: false,
  isVisible: false,
  showToast: (message, hasFnb) => {
    set({ message, hasFnb, isVisible: true });
  },
  hideToast: () => set({ isVisible: false }),
}));
export default useToastStore;
