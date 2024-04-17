import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>Y. Mohamed Idris</Text>
      <Text style={styles.regNoText}>Registration no: 22MIA1005</Text>
      <Button title="Click Me!" onPress={() => alert('Button Pressed!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  regNoText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Ap