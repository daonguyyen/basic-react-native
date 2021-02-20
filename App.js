

import React,  {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Touchable,
  ScrollView,
  RefreshControl,
} from 'react-native';

const App = () => {

  const [Items, setItems] = useState(
    [ 
      {key : 1, item: 'Item 1'}, 
      {key : 2, item: 'Item 2'}, 
      {key : 3, item: 'Item 3'}, 
      {key : 4, item: 'Item 4'}, 
      {key : 5, item: 'Item 5'}, 
      {key : 6, item: 'Item 6'}, 
      {key : 7, item: 'Item 7'}, 
      {key : 8, item: 'Item 8'}, 
      {key : 9, item: 'Item 9'}, 
      {key : 10, item: 'Item 10'}, 
      {key : 11, item: 'Item 11'}, 
      {key : 12, item: 'Item 12'}, 
    ]
  )
    
    const [Refreshing, setRefreshing] = useState(false)
    const onRefresh = () => {
      setRefreshing(true);
      setItems([...Items, {key: 60, item: 'Item 69'}])
      setRefreshing(false)
    }

  return (

    <View style={styles.body}>
      <ScrollView 
        horizontal={false}
        refreshControl={
          <RefreshControl 
            refreshing={Refreshing}
            onRefresh={onRefresh}
            colors={['blue']}
          />
        }
      >
        {Items.map((item) => {
          return (
            <View style={styles.item} key={item.key}>
              <Text style={styles.text} >{item.item}</Text>
            </View>
          )
        })}
      </ScrollView>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff'
  },
  item : {
    // flex: 1,
    backgroundColor: '#ff00ff', 
    alignItems: 'center',
    margin: 10
  },
  text: {
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10
  },
  
});

export default App;
