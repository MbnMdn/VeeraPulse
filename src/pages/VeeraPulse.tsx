import PresentMembersSection from '../components/Present Members/PresentMembersSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';

export default function VeeraPulse() {
  return (
    <div className="m-14 flex flex-col gap-6">
      <PresentMembersSection />
      <ProjectsSection />
    </div>
  );
}
