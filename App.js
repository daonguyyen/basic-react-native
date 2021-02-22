

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
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable
} from 'react-native';

const App = () => {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const onPressHandler = () => {
    setSubmitted(!submitted)
  }
  return (

    <View style={styles.body}>
      <Text style={styles.text}> Please wtrite your name</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. John'
        onChangeText={(value) => setName(value)}
      />
      {/* <Button
        title={submitted ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        color='#00f'
      /> */}

      {/* <TouchableOpacity
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.5}
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </TouchableOpacity> */}

      {/* <TouchableHighlight
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.5}
        underlayColor='#dddddd'
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </TouchableHighlight> */}

      {/* <TouchableWithoutFeedback
        onPress={onPressHandler}
      >
        <View style={styles.button}>
          <Text style={styles.text}>
            {submitted ? 'Clear' : 'Submit'}
          </Text>
        </View>
      </TouchableWithoutFeedback> */}

      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? 'yellow' : 'red' },
        ]}
        hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
        onPress={onPressHandler}
      >
        <Text style={styles.text}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </Pressable>

      {
        submitted ?
          <Text style={styles.text}>You are registered as {name}</Text>
          :
          null
      }
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
    fontSize: 20,
    marginBottom: 10
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: 'blue',
    alignItems: 'center'
  }
});

export default App;
