import { useState, useRef } from 'react';
import { ChangeEvent } from 'react';
import useModifyNickName from './useModifyNickName';
import useModifyProfileImg from './useModifyProfileImg';

export default function useModifyProfile({ userImg, nickName }: { userImg: string; nickName: string }) {
  const [profile, setProfile] = useState({ userImg: userImg, nickName: nickName });
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState('');
  const { modifyNickName } = useModifyNickName(nickName, profile.nickName, setError);
  const { modifyProfileImg } = useModifyProfileImg(userImg, profile.userImg);

  const handleModifyProfile = async (close: () => void) => {
    try {
      await Promise.all([modifyNickName(), modifyProfileImg()]);
      close();
    } catch (error) {
      console.error('Error modifying profile:', error);
    }
  };

  const handleClick = () => fileInputRef.current?.click();

  const handleImgUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfile((prevState) => ({ ...prevState, userImg: reader.result as string }));
      reader.readAsDataURL(file);
    }
  };

  const onNickNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProfile((prevState) => ({ ...prevState, nickName: e.target.value }));
    setError('');
  };

  return {
    profile,
    handleImgUpload,
    handleClick,
    fileInputRef,
    onNickNameChange,
    handleModifyProfile,
    error,
  };
}
