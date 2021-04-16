import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { Generator } from './src/screens/Generator'

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Generator />
    </>
  )
}
