import { useEffect, useState } from 'react';

import { useSignalR } from '../../context/SignalRContext';
export const RealTime: ({
  updateCheckInStatus,
}: {
  updateCheckInStatus: any;
}) => void = ({ updateCheckInStatus }) => {
  const { connection, isConnected } = useSignalR();
  const [detectMessages, setDetectMessages] = useState<string[]>([]);

  useEffect(() => {
    if (connection && isConnected) {
      connection.on('onUpdate', (message: any) => {
        setDetectMessages((prevMessages) => [...prevMessages, message]);
        console.log('Received onDetect', message);

        // Update the check-in status for the member
        updateCheckInStatus(message);
      });

      return () => {
        connection.off('onUpdate');
      };
    }
  }, [connection, isConnected, updateCheckInStatus]);
};
