import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SpaceItem from './components/SpaceItem';

export default function App() {
  return (
    <View style={styles.container}>

      <SpaceItem name={'STARSHIP SN9 HIGH-ALTITUDE FLIGHT TEST'} subtitle={'COMPLETED TEST'}  />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
