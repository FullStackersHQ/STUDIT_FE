import { create } from 'zustand';

interface propertyType {
  nickName: string;
  profile_image: string;
  jwt_token: string;
  point: number;
}

interface AuthPropsType {
  id: number;
  properties: propertyType;
  setAuth: (id: number, properties: propertyType) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthPropsType>((set) => ({
  id: -1,
  properties: {
    nickName: '',
    profile_image: '',
    jwt_token: '',
    point: -1,
  },

  // 로그인 시 상태 설정 및 localStorage 저장
  setAuth: (id, properties) => {
    const authData = { id, properties };
    localStorage.setItem('auth', JSON.stringify(authData));
    set(authData);
  },

  // 로그아웃 시 상태 초기화 및 localStorage 제거
  clearAuth: () => {
    localStorage.removeItem('auth');
    set({
      id: -1,
      properties: {
        nickName: '',
        profile_image: '',
        jwt_token: '',
        point: -1,
      },
    });
  },
}));

const restoreAuthState = () => {
  const storedAuth = localStorage.getItem('auth');
  if (storedAuth) {
    const { id, properties } = JSON.parse(storedAuth);
    useAuthStore.getState().setAuth(id, properties);
  }
};

// 앱 초기화 시 상태 복원
restoreAuthState();
