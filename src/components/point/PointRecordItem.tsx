import { PointRecord } from '../../types/interface';
import PlusIcon from '../../assets/icons/plus.svg';
import MinusIcon from '../../assets/icons/minus.svg';
import { formatTimeToAMPM } from '../../utils/commonUtils';

export default function PointRecordItem({ record }: { record: PointRecord }) {
  const { id, type, time, amount, total_after } = record;

  const Icon = ['충전', '환불', '보상'].includes(type) ? PlusIcon : MinusIcon;
  const typeClass =
    type === '충전'
      ? 'text-topup'
      : type === '환불'
        ? 'text-black'
        : type === '보상'
          ? 'text-main-text'
          : type === '차감'
            ? 'text-deduct'
            : 'text-withdraw';
  const sign = ['충전', '환불', '보상'].includes(type) ? '+' : '-';

  return (
    <li key={id} className="flex items-center text-sm">
      <Icon alt={type} className={`h-6 w-6 ${typeClass}`} />
      <div className="ml-2 flex flex-col">
        <span className="font-medium">
          {amount.toLocaleString()} P {type}
        </span>
        <span className="text-xs">{formatTimeToAMPM(time)}</span>
      </div>
      <div className="ml-auto flex flex-col items-end">
        <span className={`font-bold ${typeClass}`}>
          {sign} {amount.toLocaleString()} P
        </span>
        <span className="text-xs">{total_after.toLocaleString()}</span>
      </div>
    </li>
  );
}
