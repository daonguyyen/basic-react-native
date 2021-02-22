

import React,  {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Touchable,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList
} from 'react-native';

const App = () => {

  const [Items, setItems] = useState(
    [ 
      { name: 'Item 1'}, 
      { name: 'Item 2'}, 
      { name: 'Item 3'}, 
      { name: 'Item 4'}, 
      { name: 'Item 5'}, 
      { name: 'Item 6'}, 
      { name: 'Item 7'}, 
      { name: 'Item 8'}, 
      { name: 'Item 9'}, 
      { name: 'Item 10'}, 
      { name: 'Item 11'}, 
      { name: 'Item 12'}, 
    ]
  )

  const DATA = [
    {
      title: 'Title 1',
      data : ['Item 1-1', 'Item 1-2', 'Item 1-3']
    },
    {
      title: 'Title 2',
      data : ['Item 2-1', 'Item 2-2', 'Item 2-3']
    },
    {
      title: 'Title 3',
      data : ['Item 3-1']
    },
    {
      title: 'Title 4',
      data : ['Item 4-1', 'Item 4-2']
    }
  ]
    
    const [Refreshing, setRefreshing] = useState(false)
    const onRefresh = () => {
      setRefreshing(true);
      setItems([...Items, {name: 'Item 69'}])
      setRefreshing(false)
    }

  return (

    <View style={styles.body}>

      <SectionList
        keyExtractor={(item, index) => index.toString()} 
        sections={DATA}
        renderItem={({item})=> (
          <Text style={styles.text} >{item}</Text>
        )}
        renderSectionHeader={({section})=> (
          <View style={styles.item}>
              <Text style={styles.text} >{section.title}</Text>
            </View>
        )}
      />

      {/* <FlatList 
      keyExtractor={(item, index)=>index.toString()}
        data={Items}
        renderItem={({item}) => (
          <View style={styles.item}>
              <Text style={styles.text} >{item.name}</Text>
            </View>
        )}
        refreshControl={
          <RefreshControl 
            refreshing={Refreshing}
            onRefresh={onRefresh}
            colors={['blue']}
          />
        }
      /> */}

      {/* <ScrollView 
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
      </ScrollView> */}
      
      
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
