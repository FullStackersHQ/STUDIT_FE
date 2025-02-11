import { useMutation } from '@tanstack/react-query';
import myPageApi from '../../api/myPageApi';
import useProfile from './useProfile';
import { ModifyNickNameProps } from '../../types/interface';

export default function useModifyNickName({ currentNickName, setError, userId }: ModifyNickNameProps) {
  const { reloadProfile } = useProfile(userId);
  const mutation = useMutation({
    mutationFn: async () => {
      await myPageApi.modifyNickName(currentNickName);
    },
    onSuccess: () => reloadProfile(),
    onError: () => setError('중복된 닉네임이에요'),
  });
  return { modifyNickName: mutation.mutate };
}
