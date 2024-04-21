// YourStackParamList.ts
import { RouteProp } from '@react-navigation/native';

export type YourStackParamList = {
  App: undefined;
  EventDetails: { name: string; date: string; time: string };
};

export type EventDetailsScreenRouteProp = RouteProp<YourStackParamList, 'EventDetails'>;
