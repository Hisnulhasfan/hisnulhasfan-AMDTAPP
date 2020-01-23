import React from 'react';
import { StyleSheet, Text, View,Button,Alert,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    
    <Text style={{fontWeight: 'bold'}}> Hisnul Hasfan </Text>
    <Image source={require('./ir.jpg')} 
        style={{width: 250, height: 250}}/>
      <Text>I am Hisnul Hasfan! and I am AMDTian </Text>
      <Button
          title="Press me"
          onPress={() => Alert.alert('Hisnul Hasfan')}
        />
        
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
