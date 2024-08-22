import React from 'react';

import PresentMembersSection from './components/Present Members/PresentMembersSection';
import { SignalRProvider } from './context/SignalRContext';
import VeeraPulse from './pages/VeeraPulse';

const App: React.FC = () => {
  return (
    <SignalRProvider>
      <VeeraPulse />
    </SignalRProvider>
  );
};

export default App;
