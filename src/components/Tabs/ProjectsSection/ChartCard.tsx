import Chart from './Chart';

export default function ChartCard() {
  return (
    // <div className="flex w-2/3 flex-col rounded-2xl border-2 border-cyan-700 bg-neutral-50 p-4">
    <div className="flex flex-col rounded-2xl border-2 border-double border-cyan-600 bg-neutral-50 p-4">
      <Chart />
      <p className="self-center">Deadline</p>
    </div>
  );
}
