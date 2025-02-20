import { useState, useEffect } from 'react';
import useGetNotice from './useGetNotice';
import useCreateNotice from './useCreateNotice';
import useEditNotice from './useEditNotice';
import useDeleteNotice from './useDeleteNotice';
import useGetStudyDetail from '../useGetStudyDetail';

export default function useManageModal(studyId: number, hasNotice: boolean, close: () => void) {
  const { refetchDetail } = useGetStudyDetail(studyId);
  const { notice, isLoading, refetchNotice } = useGetNotice(studyId, hasNotice);
  const [input, setInput] = useState('');
  const { createNotice } = useCreateNotice({ studyId, content: input, close });
  const { editNotice } = useEditNotice({ studyId, content: input, close, refetchNotice });
  const { deleteNotice } = useDeleteNotice({ studyId, close, refetchDetail });

  useEffect(() => {
    if (notice?.content && hasNotice) {
      setInput(notice.content);
    }
  }, [notice, hasNotice]);

  return {
    isLoading,
    input,
    setInput,
    editNotice,
    createNotice,
    deleteNotice,
  };
}
