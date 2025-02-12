import { useParams } from 'react-router-dom';
import useGetStudyDetail from '../useGetStudyDetail';
import React, { useState, useEffect } from 'react';

export default function useEditStudy() {
  const params = useParams();
  const studyId = Number(params.studyId);
  const { studyDetail, isLoading } = useGetStudyDetail(studyId);
  const [editInfo, setEditInfo] = useState({
    title: '',
    description: '',
    tags: [] as string[],
  });
  const [tagInput, setTagInput] = useState('');
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    if (studyDetail) {
      setEditInfo({
        title: studyDetail.title || '',
        description: studyDetail.description || '',
        tags: studyDetail.tags || [],
      });
    }
  }, [studyDetail]);

  useEffect(() => {
    if (
      editInfo.title !== studyDetail?.title ||
      editInfo.description !== studyDetail?.description ||
      JSON.stringify(editInfo.tags) !== JSON.stringify(studyDetail?.tags)
    )
      setIsModified(true);
    else setIsModified(false);
  }, [editInfo, studyDetail]);

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
    studyDetail,
    isLoading,
    handleAddTag,
    handleRemoveTag,
    tagInput,
    setTagInput,
    studyId,
    isModified,
  };
}
