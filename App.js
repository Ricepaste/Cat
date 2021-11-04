import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image source={logo} style={{ width: 305, height: 215 }} /> */}
      <Image source={{ uri: "https://i.imgur.com/GHgJB.jpg" }} style={{ width: 305, height: 215 }} />
      <Text> </Text>
      <Text>I</Text>
      <Text>ask</Text>
      <Text>my cat</Text>
      <Text>ToDo MyHomeWork ForMe</Text>
      <Text>And He Said </Text>
      <Text style={{ color: '#DAA520', fontSize: 50 }} >FUCK</Text>
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
