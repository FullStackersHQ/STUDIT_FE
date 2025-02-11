import { useMutation } from '@tanstack/react-query';
import myPageApi from '../../api/myPageApi';
import useProfile from './useProfile';

export default function useModifyProfileImg({ currentImg, userId }: { currentImg: string; userId: number }) {
  const { reloadProfile } = useProfile(userId);
  const mutation = useMutation({
    mutationFn: async () => {
      await myPageApi.modifyProfileImg(currentImg);
    },
    onSuccess: () => reloadProfile(),
  });
  return { modifyProfileImg: mutation.mutate };
}
