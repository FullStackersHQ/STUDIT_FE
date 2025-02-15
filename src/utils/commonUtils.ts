export function convertToPercent(minutes: number) {
  const percent = (minutes / 840) * 100;
  return percent > 100 ? 100 : Math.round(percent);
}

export function convertToHHMM(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}시간 ${mins}분`;
}

export function handleMaxLengthChange(
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  maxLength: number,
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
) {
  const newValue = e.target.value;
  if (newValue.length <= maxLength) onChange(e);
}

export function handleKeyDown(
  e: React.KeyboardEvent<HTMLInputElement | HTMLButtonElement | HTMLTextAreaElement>,
  onButtonClick: () => void,
) {
  if (e.key === 'Enter') {
    e.preventDefault();
    onButtonClick();
  }
}

export function toMonthDay(date: string): string {
  const [, month, day] = date.split('.');
  const monthNumber = parseInt(month);
  const dayNumber = parseInt(day);
  return `${monthNumber}월 ${dayNumber}일`;
}

export function formatTimeToAMPM(time: string) {
  const [hour, minute] = time.split(':').map(Number);
  const period = hour >= 12 ? '오후' : '오전';
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${period} ${hour12}:${minute < 10 ? '0' + minute : minute}`;
}

export const decimalToTimeString = (value: number): string => {
  const hours = Math.floor(value);
  const minutes = Math.round((value - hours) * 60);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

export const timeStringToDecimal = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return Math.ceil((hours + minutes / 60) * 10) / 10;
};
