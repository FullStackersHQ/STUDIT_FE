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
export function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement | HTMLButtonElement>, onButtonClick: () => void) {
  if (e.key === 'Enter') {
    e.preventDefault();
    onButtonClick();
  }
}
