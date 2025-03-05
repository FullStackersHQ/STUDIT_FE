export const CATEGORY: string[] = ['공무원', '대학 입시', '시험', '어학', '임용', '취업', '코딩', '기타'];
export const POINTFILTERS = ['전체', '충전', '차감', '출금', '보상', '환불'] as const;
export const COLORS = ['#0074D9', '#FF6347', '#FFCC00', '#3D9970', '#B10DC9', '#001F3F', '#AAAAAA', '#F012BE'] as const;
export const FNB_LIST: { [key: string]: string } = {
  '': '모집 목록',
  'study-list': '진행 목록',
  'my-page': '마이 페이지',
};
export const MONTH_LIST = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;
