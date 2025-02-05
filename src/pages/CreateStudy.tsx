import React, { useState } from 'react';
import HeaderWithBack from '../components/HeaderWithBack';
import { CATEGORY } from '../constants/CATEGORY';
import CreatableSelect from 'react-select/creatable';
import Button from '../components/Button';
import { MultiValue } from 'react-select';

interface TagOption {
  label: string;
  value: string;
}

const CreateStudy = React.memo((): JSX.Element => {
  const action = { icon: undefined, ariaLabel: '', onClick: () => {} };
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [point, setPoint] = useState<number>(0);
  const [goalTime, setGoalTime] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [studyStartDate, setStudyStartDate] = useState<string>('');
  const [studyEndDate, setStudyEndDate] = useState<string>('');
  const [recruitEndDate, setRecruitEndDate] = useState<string>('');
  const [tags, setTags] = useState<string>('');

  const handleOnItemAdded = (newValue: MultiValue<TagOption>) => {
    if (!newValue) return;
    const newCity = newValue.map((item) => item.value);
    setTags(newCity.join(' ').trim());
  };

  const onClickBtn = () => {
    // createStudy api 연동
    console.log({ title, description, point, goalTime, category, studyStartDate, studyEndDate, recruitEndDate });
  };

  return (
    <>
      <HeaderWithBack title={'스터디 생성하기'} action={action} isStudyPage={false} />
      <div className="px-4">
        <h2 className="align-center flex text-[16px] font-bold">
          <p className="text-deduct">*</p>제목
        </h2>
        <input
          type="text"
          placeholder="14자까지 입력가능합니다."
          value={title}
          onChange={(e) => {
            if (title.length < 14) setTitle(e.target.value);
          }}
          className="border-light-gray mt-1 w-full rounded-[10px] border px-2 py-1 text-sm"
        />
      </div>
      <div className="px-4">
        <h2 className="align-center flex text-[16px] font-bold">
          <p className="text-deduct">*</p>내용
        </h2>
        <textarea
          placeholder="스터디 내용을 입력하세요."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border-light-gray mt-1 h-[88px] w-full rounded-[10px] border px-2 py-1 text-sm"
        />
      </div>
      <div className="flex px-4">
        <h2 className="mr-2 flex text-[16px] font-bold">
          <p className="text-deduct">*</p>참여 포인트
        </h2>
        <input
          type="text"
          placeholder="0"
          value={point}
          onChange={(e) => setPoint(parseInt(e.target.value))}
          className="border-light-gray mt-1 w-12 border-b text-center text-sm"
        />
        점
      </div>
      <div className="flex px-4">
        <h2 className="mr-2 flex text-[16px] font-bold">
          <p className="text-deduct">*</p>주당 목표 시간
        </h2>
        <input
          type="text"
          placeholder="0"
          value={goalTime}
          onChange={(e) => setGoalTime(parseInt(e.target.value))}
          className="border-light-gray mt-1 w-12 border-b text-center text-sm"
        />
        점
      </div>
      <div className="flex px-4">
        <h2 className="mr-2 flex text-[16px] font-bold">
          <p className="text-deduct">*</p>스터디 시작 날짜
        </h2>
        <input
          type="text"
          placeholder="0"
          value={studyStartDate}
          onChange={(e) => setStudyStartDate(e.target.value)}
          className="border-light-gray mt-1 w-12 border-b text-center text-sm"
        />
      </div>
      <div className="flex px-4">
        <h2 className="mr-2 flex text-[16px] font-bold">
          <p className="text-deduct">*</p>스터디 종료 날짜
        </h2>
        <input
          type="text"
          placeholder="0"
          value={studyEndDate}
          onChange={(e) => setStudyEndDate(e.target.value)}
          className="border-light-gray mt-1 w-12 border-b text-center text-sm"
        />
      </div>
      <div className="flex px-4">
        <h2 className="mr-2 flex text-[16px] font-bold">
          <p className="text-deduct">*</p>스터디 모집 기간
        </h2>
        <input
          type="text"
          placeholder="0"
          value={recruitEndDate}
          onChange={(e) => setRecruitEndDate(e.target.value)}
          className="border-light-gray mt-1 w-12 border-b text-center text-sm"
        />
      </div>
      <div className="flex px-4">
        <h2 className="mr-2 flex text-[16px] font-bold">
          <p className="text-deduct">*</p>모집 인원
        </h2>
        <select
          value={goalTime}
          onChange={(e) => setGoalTime(parseInt(e.target.value))}
          className="border-light-gray mt-1 w-12 border text-center text-sm"
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div className="flex px-4">
        <h2 className="mr-2 flex text-[16px] font-bold">
          <p className="text-deduct">*</p>카테고리
        </h2>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {CATEGORY.map((category) => (
            <label key={category} className="flex items-center gap-1">
              <input type="radio" name="category" value={category} onChange={(e) => setCategory(e.target.value)} />
              <span className="text-[12px] sm:text-[16px] md:text-[18px]">{category}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex px-4">
        <h2 className="mr-2 flex text-[16px] font-bold">태그</h2>
        <CreatableSelect
          isMulti
          value={tags.split(' ').map((city) => ({
            label: city,
            value: city,
          }))}
          onChange={handleOnItemAdded}
          placeholder="enter키를 통해 연속입력이 가능합니다."
        />
      </div>
      <Button text={'생성하기'} onClick={onClickBtn} ariaLabel={'생성하기 버튼'} />
    </>
  );
});

export default CreateStudy;
