

import React,  {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

const App = () => {

// For view 1
const [name, setName] = useState('Javascript')
const [session, setSession] = useState({
  number : 6,
  title : 'state'
})
const [current, setCurrent] = useState(true)

// For View 2
const [number, setNumber] = useState(0)

const onClickHandler = () => {
  setName('Programming with Kay')
  setSession({
    ...session,
    title : 'new '
  })
  setCurrent(false)
}

const onClickChangeNumber = () => {
  setNumber(number + 1)
}

  return (
    <View style={styles.body}>
      <View style={styles.body}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>This is session number {session.number} and about {session.title}</Text>
        <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
        <Button 
          title="Update state" 
          onPress={onClickHandler} 
        ></Button>
      </View>

      <View style={styles.body}>
        <Text style={styles.text}>{number * 5}</Text>
        <Button 
          title="add"
          onPress={onClickChangeNumber}
        ></Button>
        <Text style={styles.text}>You clicked {number} times</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000ff'
  },
  text: {
    color:'#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10
  }
  
});

export default App;
