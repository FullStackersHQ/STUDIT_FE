import HeaderWithBack from '../components/HeaderWithBack';
import { CATEGORY } from '../constants/constants';
import Button from '../components/Button';
import { useLocation, useParams } from 'react-router-dom';
import { StudyDetailType } from '../types/interface';
import { handleMaxLengthChange } from '../utils/commonUtils';
import useEditRecruit from '../hooks/recruit/useEditRecruit';
import useRecruitMutation from '../hooks/recruit/useRecruitMutation';
import Input from '../components/Input';

export default function EditRecruit(): JSX.Element {
  const post: StudyDetailType = useLocation().state;
  const params = useParams();
  const recruitId = Number(params.recruitId);
  const { editInfo, setEditInfo, handleAddTag, handleRemoveTag, tagInput, setTagInput } = useEditRecruit(post);
  const { editRecruit } = useRecruitMutation(recruitId, editInfo);

  return (
    <div className="h-full w-full">
      <HeaderWithBack title={'스터디 모집 수정'} />
      <section className="mt-7 flex h-[calc(100%-120px)] flex-col gap-y-3 overflow-y-auto px-4 text-sm">
        <div className="flex flex-col gap-y-1">
          <label htmlFor="studyTitle" className="font-medium">
            스터디 제목
          </label>
          <Input
            id={'studyTitle'}
            placeholder={'스터디 제목을 입력해주세요'}
            onChange={(e) =>
              handleMaxLengthChange(e, 14, () => setEditInfo((prev) => ({ ...prev, title: e.target.value })))
            }
            value={editInfo.title}
            tag={false}
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
        <div className="mt-3 flex">
          <label htmlFor="studyMember" className="font-medium">
            모집 인원
          </label>
          <select
            id="studyMember"
            value={editInfo.maxMembers || post.maxMembers}
            className="border-light-gray ml-1 border text-center text-sm"
            onChange={(e) => setEditInfo((prev) => ({ ...prev, maxMembers: Number(e.target.value) }))}
          >
            {[...Array(9)].map((_, i) => (
              <option key={i} value={i + 2}>
                {i + 2}명
              </option>
            ))}
          </select>
        </div>
        <div className="my-3 flex flex-col gap-y-1">
          <label className="font-medium">카테고리</label>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {CATEGORY.map((category) => (
              <label key={category} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="studyCategory"
                  value={category}
                  checked={category === editInfo.category}
                  onChange={(e) => setEditInfo((prev) => ({ ...prev, category: e.target.value }))}
                />
                <span className="text-[12px] sm:text-[16px] md:text-[18px]">{category}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="studyTags" className="font-medium">
            태그
          </label>
          <div className="relative w-[200px]">
            <span className="text-dark-gray absolute top-1/2 left-1 -translate-y-1/2 text-sm">#</span>
            <Input
              id="studyTags"
              value={tagInput}
              placeholder="태그 입력 후 Enter"
              onChange={(e) => setTagInput(e.target.value)}
              tag={true}
              onKeyDown={(e) => handleAddTag(e)}
              disabled={editInfo.tags.length > 4}
            />
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {editInfo.tags?.map((tag) => (
              <span
                key={tag}
                className="group text-main bg-sub hover:text-main-hover hover:bg-sub-hover flex items-center gap-1 rounded-full px-2 py-1.5 text-xs font-medium transition-colors"
              >
                #{tag}
                <button
                  className="text-dark-gray group-hover:text-gray text-xs transition-colors"
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
      </section>
      <div className="fixed bottom-8 left-1/2 w-full max-w-[768px] -translate-x-[50%] px-4">
        <Button text={'수정하기'} onClick={editRecruit} ariaLabel={'수정하기 버튼'} />
      </div>
    </div>
  );
}
