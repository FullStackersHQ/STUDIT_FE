import { useMutation } from '@tanstack/react-query';
import myPageApi from '../../api/myPageApi';

export default function useModifyProfileImg(prevImg: string, currentImg: string) {
  const mutation = useMutation({
    mutationFn: async () => {
      if (!prevImg || prevImg === currentImg) return;
      await myPageApi.modifyProfileImg(currentImg);
    },
  });
  return { modifyProfileImg: mutation.mutate };
}
