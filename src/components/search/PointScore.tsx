export default function PointScore({ text, value }: { text: string; value: number }) {
  return (
    <div className="w-[40%] rounded-[10px] border p-2">
      <p className="items-start text-[12px]">{text}</p>
      <span className="text-[14px] text-black">{value.toLocaleString()}포인트</span>
    </div>
  );
}
