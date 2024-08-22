import ProjectsTable from './ProjectsTable';

export default function ProjectsSection() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl font-semibold text-cyan-900">Projects</p>
      <ProjectsTable />
    </div>
  );
}
