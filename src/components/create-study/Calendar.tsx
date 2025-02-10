import { useState, useEffect, useRef } from 'react';

type CalendarProps = {
  date: string | number;
  setDate: (date: string) => void;
};

const monthList = [
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
];

export default function Calendar({ date, setDate }: CalendarProps) {
  const [today] = useState<Date>(new Date());
  const [month, setMonth] = useState<number>(today.getMonth());
  const [year, setYear] = useState<number>(today.getFullYear());
  const [show, setShow] = useState<boolean>(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShow(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeMonth = (offset: number) => {
    setMonth((prev) => {
      const newMonth = prev + offset;
      if (newMonth > 11) {
        setYear((y) => y + 1);
        return 0;
      }
      if (newMonth < 0) {
        setYear((y) => y - 1);
        return 11;
      }
      return newMonth;
    });
  };

  const selectDate = (day: number) => {
    const selectedDate = new Date(year, month, day);
    const formattedDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
    setDate(formattedDate);
    setShow(false);
  };

  const renderCalendar = () => {
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();
    const days: JSX.Element[] = [];
    const selectedDate = date ? new Date(date) : new Date();

    for (let i = firstDay; i > 0; i--) {
      days.push(
        <div key={'bp' + i} className="text-gray flex items-center justify-center text-center">
          {prevLastDate - i + 1}
        </div>,
      );
    }

    for (let day = 1; day <= lastDate; day++) {
      const isSelected =
        selectedDate &&
        day === selectedDate.getDate() &&
        month === selectedDate.getMonth() &&
        year === selectedDate.getFullYear();
      days.push(
        <div
          key={day}
          className={`cursor-pointer p-2 text-center ${isSelected ? 'border-main text-main rounded-[50%] border bg-white' : 'hover:bg-main-hover'}`}
          onClick={() => selectDate(day)}
        >
          {day}
        </div>,
      );
    }

    const totalCells = firstDay + lastDate;
    const nextDays = 7 - (totalCells % 7);
    if (nextDays < 7) {
      for (let i = 1; i <= nextDays; i++) {
        days.push(
          <div key={'ap' + i} className="text-gray flex items-center justify-center text-center">
            {i}
          </div>,
        );
      }
    }

    return days;
  };

  return (
    <div className="relative" ref={calendarRef}>
      <input
        type="text"
        value={date}
        readOnly
        onFocus={() => setShow(true)}
        className="border-light-gray w-24 cursor-pointer border-b text-center text-sm"
      />
      {show && (
        <div className="absolute top-full left-0 z-10 w-60 rounded-lg border bg-white shadow-lg">
          <div className="my-2 flex items-center justify-evenly text-black">
            <button className="text-main" onClick={() => changeMonth(-1)}>
              ◀
            </button>
            <span>
              {monthList[month]} {year}
            </span>
            <button className="text-main" onClick={() => changeMonth(1)}>
              ▶
            </button>
          </div>
          <div className="text-gray grid grid-cols-7 text-center text-sm">
            {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
              <div key={day} className="font-bold">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 text-sm">{renderCalendar()}</div>
        </div>
      )}
    </div>
  );
}
