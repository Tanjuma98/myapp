import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AddRecord from './screens/addRecord';
import RecordDetails from './screens/recordDetails';
import About from './screens/about';
import Navigator from './routes/drawer';

export default function App() {
  return (
    <Navigator />
  );
}
