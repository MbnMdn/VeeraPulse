import { useState } from 'react';

import ProjectsTable from './ProjectsTable';
import Slider from './Slider';
import ToggleSwitch from './ToggleSwitch';

export default function ProjectsSection() {
  const [toggle, setToggle] = useState(false);
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

      {!toggle && <ProjectsTable />}
      {toggle && (
        <div className="flex flex-grow gap-12">
          <div className="flex w-2/3 flex-col">
            <div className="flex-grow p-5 pt-10">
              <Slider />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
