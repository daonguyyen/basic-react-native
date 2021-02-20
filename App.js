

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

      <View style={styles.super1}>
        <View style={styles.view1}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.view3}>
            <Text style={styles.text}>3</Text>
          </View>
      </View>

      <View style={styles.super2}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.view5}>
            <Text style={styles.text}>5</Text>
          </View>
      </View>

      <View style={styles.super3}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
            <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  super1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  super2: {
    flex: 2,
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  super3: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  view1 : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ffff'
  },
  view2 : {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff00ff'
  },
  view3 : {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff00'
  },
  view4 : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  view5 : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  view6 : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  view7 : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10
  },
  
});

export default App;
