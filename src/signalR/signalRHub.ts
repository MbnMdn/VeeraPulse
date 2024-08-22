import * as signalR from '@microsoft/signalr';

const hubUrl = 'http://192.168.100.162/socket/attendance';

export const createHubConnection = () => {
  return new signalR.HubConnectionBuilder()
    .withUrl(hubUrl, {
      withCredentials: false,
    })
    .withAutomaticReconnect()
    .configureLogging(signalR.LogLevel.Information)
    .build();
};
