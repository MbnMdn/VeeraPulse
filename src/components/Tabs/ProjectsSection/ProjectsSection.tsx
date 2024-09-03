import { useState } from 'react';

import ProjectsTable from './ProjectsTable';
import Slider from './Slider';

export default function ProjectsSection() {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex gap-3 ">
        {/*<p className="text-2xl font-semibold text-cyan-900">Projects</p>*/}
        {/*<ToggleSwitch*/}
        {/*  checked={toggle}*/}
        {/*  onChange={() => setToggle(!toggle)}*/}
        {/*  leftLabel="All"*/}
        {/*  rightLabel="Slider"*/}
        {/*/>*/}
      </div>

      <ProjectsTable />
    </div>
  );
}
