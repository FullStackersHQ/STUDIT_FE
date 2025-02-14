import React from 'react';
import HeaderWithBack from '../components/HeaderWithBack';
import useEditStudy from '../hooks/study-detail/edit/useEditStudy';
import { handleMaxLengthChange } from '../utils/commonUtils';
import Button from '../components/Button';
import useStudyMutation from '../hooks/study-detail/edit/useStudyMutation';

function EditStudy() {
  const {
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
  } = useEditStudy();
  const { editStudy } = useStudyMutation(editInfo, studyId);
  if (!studyDetail || isLoading) return null;

  return (
    <div className="h-full w-full">
      <HeaderWithBack title="스터디 정보 수정" />
      <section className="mt-7 flex h-[calc(100%-60px)] flex-col gap-y-3 px-4 text-sm">
        <div className="flex flex-col gap-y-1">
          <label htmlFor="studyTitle" className="font-medium">
            스터디 제목
          </label>
          <input
            id="studyTitle"
            placeholder="스터디 제목을 입력해주세요"
            type="text"
            value={editInfo.title}
            onChange={(e) =>
              handleMaxLengthChange(e, 14, () => setEditInfo((prev) => ({ ...prev, title: e.target.value })))
            }
            className="text-input"
          />
          <span className="self-end text-xs">{editInfo.title?.length}/14</span>
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="studyDescription" className="font-medium">
            스터디 설명
          </label>
          <textarea
            placeholder="스터디 설명을 입력해주세요"
            id="studyDescription"
            value={editInfo.description}
            onChange={(e) => setEditInfo((prev) => ({ ...prev, description: e.target.value }))}
            className="text-input h-[200px]"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="studyTags" className="font-medium">
            태그
          </label>
          <div className="relative w-[200px]">
            <span className="text-dark-gray absolute top-1/2 left-1 -translate-y-1/2 text-sm">#</span>
            <input
              id="studyTags"
              type="text"
              value={tagInput}
              placeholder="태그 입력 후 Enter"
              onChange={(e) => setTagInput(e.target.value)}
              className="w-full border-b border-black py-1 pl-4 text-sm"
              onKeyDown={(e) => handleAddTag(e)}
              disabled={editInfo.tags.length > 4}
            />
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {editInfo.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-main hover:bg-main-hover flex items-center gap-1 rounded-full px-2 py-1.5 text-xs font-medium text-white transition-colors"
              >
                #{tag}
                <button
                  className="text-xs text-white transition-colors"
                  onClick={() => handleRemoveTag(tag)}
                  aria-label="태그 제거"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
          {editInfo.tags.length > 4 && (
            <p className="text-deduct mt-1 text-xs font-medium">*태그는 최대 5개까지 생성 가능해요.</p>
          )}
        </div>
        <Button
          text="수정하기"
          onClick={() => {
            if (isModified) editStudy();
          }}
          extraClass="mt-auto"
          disabled={!isModified}
        />
      </section>
    </div>
  );
}

export default React.memo(EditStudy);
