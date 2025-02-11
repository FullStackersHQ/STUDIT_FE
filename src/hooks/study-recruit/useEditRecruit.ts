import { useState } from 'react';
import { StudyRoomPutType } from '../../types/interface';
import useEditStudy from '../study-default/useEditStudy';

export default function useEditRecruit(post: StudyRoomPutType) {
  const [editInfo, setEditInfo] = useState({
    title: post.title,
    description: post.description,
    tags: post.tags,
    category: post.category,
    maxMembers: post.maxMembers,
  });
  const { handleAddTag, handleRemoveTag, tagInput, setTagInput } = useEditStudy();

  return {
    editInfo,
    setEditInfo,
    handleAddTag,
    handleRemoveTag,
    tagInput,
    setTagInput,
  };
}
