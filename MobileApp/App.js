console.ignoredYellowBox = ['Remote debugger'];
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

import { StatusBar } from 'expo-status-bar';
import React from "react";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return <HomeScreen />;
}