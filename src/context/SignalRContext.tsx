import { HubConnection } from '@microsoft/signalr';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

import { createHubConnection } from '../signalR/signalRHub';

interface SignalRContextType {
  connection: HubConnection | null;
  isConnected: boolean;
}

const SignalRContext = createContext<SignalRContextType | undefined>(undefined);

export const SignalRProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const hubConnection = createHubConnection();
    setConnection(hubConnection);

    hubConnection
      .start()
      .then(() => setIsConnected(true))
      .catch((err) => console.error('Error while starting SignalR connection: ', err));

    hubConnection.onclose(() => setIsConnected(false));

    return () => {
      hubConnection.stop();
    };
  }, []);

  return (
    <SignalRContext.Provider value={{ connection, isConnected }}>
      {children}
    </SignalRContext.Provider>
  );
};

export const useSignalR = () => {
  const context = useContext(SignalRContext);
  if (!context) {
    throw new Error('useSignalR must be used within a SignalRProvider');
  }
  return context;
};
