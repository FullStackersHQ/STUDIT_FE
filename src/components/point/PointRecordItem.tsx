import { PointRecord } from '../../types/interface';
import TopUpIcon from '../../assets/icons/topup.svg';
import DeductIcon from '../../assets/icons/deduct.svg';
import WithdrawIcon from '../../assets/icons/withdraw.svg';
import { formatTimeToAMPM } from '../../utils/commonUtils';

export default function PointRecordItem({ record }: { record: PointRecord }) {
  const { id, type, time, amount, total_after } = record;

  const Icon = type === '충전' ? TopUpIcon : type === '차감' ? DeductIcon : WithdrawIcon;
  const sign = type === '충전' ? '+' : '-';
  const typeClass = type === '충전' ? 'text-topup' : type === '차감' ? 'text-deduct' : 'text-withdraw';

  return (
    <li key={id} className="flex items-center text-sm">
      <Icon alt={type} className="h-6 w-6" />
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
