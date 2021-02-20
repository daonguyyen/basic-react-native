

import React,  {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Touchable,
} from 'react-native';

const App = () => {

// For view 1
const [name, setName] = useState('Javascript')
const onClickHandler = () => {
  setName('Programming with Kay')
}

  return (
    <View style={styles.body}>
        <Text style={styles.text}>{name}</Text>
        <View style={styles.button}>
        <Button  
          title="Update state" 
          onPress={onClickHandler} 
        ></Button>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000ff',
    borderWidth: 10,
    borderColor: '#ff00ff',
    borderRadius: 5
  },
  text: {
    color:'#ffffff',
    fontSize: 40,
    fontStyle: 'italic',
    margin: 10
  },
   button : {
     width: 250,
     height: 60
   }
  
});

export default App;
