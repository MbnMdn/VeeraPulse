import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { SyntheticEvent, useState } from 'react';

import ProjectsSection from './ProjectsSection/ProjectsSection';
import Slider from './ProjectsSection/Slider';
export default function TabsComponent() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        textColor="inherit"
        className="text-darkBlue"
      >
        <Tab label="Projects" />
        <Tab label="Charts" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ProjectsSection />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div>
          <Slider />
        </div>
      </TabPanel>
    </div>
  );
}
