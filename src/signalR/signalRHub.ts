import * as signalR from '@microsoft/signalr';

import { ENV } from '../scripts/settings';

const hubUrl = ENV.apiUrl + '/socket/attendance';
export const createHubConnection = () => {
  return new signalR.HubConnectionBuilder()
    .withUrl(hubUrl, {
      withCredentials: false,
    })
    .withAutomaticReconnect()
    .configureLogging(signalR.LogLevel.Information)
    .build();
};
