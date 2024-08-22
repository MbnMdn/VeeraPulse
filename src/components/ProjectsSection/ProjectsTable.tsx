import HeaderCard from './HeaderCard';
import ProgressCard from './ProgressCard';

export default function ProjectsTable() {
  return (
    <div className="grid grid-cols-7 gap-4">
      <HeaderCard title="AI" />
      <HeaderCard title="XBOX" />
      <HeaderCard title="App" />
      <HeaderCard title="Backend" />
      <HeaderCard title="Design" />
      <HeaderCard title="Frontend" />
      <HeaderCard title="Total" />

      <ProgressCard />
      <ProgressCard />
      <ProgressCard />
      <ProgressCard />
      <ProgressCard />
      <ProgressCard />
    </div>
  );
}
