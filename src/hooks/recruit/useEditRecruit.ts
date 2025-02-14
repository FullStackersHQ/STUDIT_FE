import { useState } from 'react';
import { StudyRoomPutType } from '../../types/interface';

export default function useEditRecruit(post: StudyRoomPutType) {
  const [editInfo, setEditInfo] = useState({
    title: post.title,
    description: post.description,
    tags: post.tags,
    category: post.category,
    maxMembers: post.maxMembers,
  });
  const [tagInput, setTagInput] = useState('');

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim() !== '') {
      e.preventDefault();
      if (!editInfo.tags.includes(tagInput.trim())) {
        setEditInfo((prev) => ({
          ...prev,
          tags: [...prev.tags, tagInput.trim()],
        }));
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setEditInfo((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  return {
    editInfo,
    setEditInfo,
    handleAddTag,
    handleRemoveTag,
    tagInput,
    setTagInput,
  };
}
