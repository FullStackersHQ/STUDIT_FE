import { useState, useEffect } from 'react';
import useGetNotice from './useGetNotice';
import useCreateNotice from './useCreateNotice';
import useEditNotice from './useEditNotice';

export default function useNoticeModal(studyId: number, hasNotice: boolean, close: () => void) {
  const { notice, isLoading } = useGetNotice(studyId, hasNotice);
  const [input, setInput] = useState('');
  const { createNotice } = useCreateNotice({ studyId, content: input, close });
  const { editNotice } = useEditNotice({ studyId, content: input, close });

  useEffect(() => {
    if (notice?.content && hasNotice) {
      setInput(notice.content);
    }
  }, [notice, hasNotice]);

  const handleClick = () => {
    if (hasNotice) editNotice();
    else createNotice();
  };
  return {
    isLoading,
    input,
    setInput,
    handleClick,
  };
}
