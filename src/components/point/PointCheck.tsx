import PointIcon from '../../assets/icons/point.svg';
import useGetUserPoints from '../../hooks/point/useGetUserPoints';

export default function PointCheck() {
  const { userPoints, isLoading } = useGetUserPoints();
  if (!userPoints || isLoading) return;
  const { totalPoints, totalChargedPoints, totalDeductedPoints, totalWithdrawnPoints } = userPoints;

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-x-1">
            <PointIcon alt="포인트" />
            <h1 className="text-lg font-medium">보유한 포인트</h1>
          </div>
          <h2 className="ml-7 text-xl font-bold">{totalPoints.toLocaleString()} P</h2>
        </div>
        <button className="bg-white-gray hover:text-color-gray hover:bg-light-gray cursor-pointer rounded-full px-2 py-1.5 text-sm font-medium transition-colors">
          출금하기
        </button>
      </div>
      <ul className="flex h-14 w-full items-center justify-between text-sm">
        <li className="flex grow flex-col items-center gap-y-1.5 border-r border-black">
          <span>총 충전 포인트</span>
          <span className="font-medium">{totalChargedPoints.toLocaleString()} P</span>
        </li>
        <li className="flex grow flex-col items-center gap-y-1.5 border-r border-black">
          <span>총 차감 포인트</span>
          <span className="font-medium">{totalDeductedPoints.toLocaleString()} P</span>
        </li>
        <li className="flex grow flex-col items-center gap-y-1.5">
          <span>총 출금 포인트</span>
          <span className="font-medium">{totalWithdrawnPoints.toLocaleString()} P</span>
        </li>
      </ul>
    </section>
  );
}
