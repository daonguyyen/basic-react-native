

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Touchable,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
  TextInput
} from 'react-native';

const App = () => {
  const [name, setName] = useState('')
  return (

    <View style={styles.body}>
      <Text style={styles.text}> Please wtrite your name</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. John'
        onChangeText={(value) => setName(value)}
      />
      <Text style={styles.text}>Your name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff'
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10
  },
  input: {
    borderWidth: 1,
    width: 200,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20
  }
});

export default App;
