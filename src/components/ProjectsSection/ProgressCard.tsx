export default function ProgressCard() {
  return (
    <div>
      <progress value={0.5} />
      <progress value={75} max={100} />
    </div>
  );
}
