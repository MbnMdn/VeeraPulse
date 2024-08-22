import Chart from './Chart';

export default function ProjectsTable() {
  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="max-w-3xl">
        <Chart />
      </div>

      <div className="max-w-3xl">
        <Chart />
      </div>

      <div className="max-w-3xl">
        <Chart />
      </div>

      <div className="max-w-3xl">
        <Chart />
      </div>

      <div className="max-w-3xl">
        <Chart />
      </div>

      <div className="max-w-3xl">
        <Chart />
      </div>
    </div>
  );
}
