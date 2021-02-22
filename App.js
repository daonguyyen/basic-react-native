

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
  SectionList
} from 'react-native';

const App = () => {

  const [Items, setItems] = useState(
    [
      { name: 'Item 1' },
      { name: 'Item 2' },
      { name: 'Item 3' },
      { name: 'Item 4' },
      { name: 'Item 5' },
      { name: 'Item 6' },
      { name: 'Item 7' },
      { name: 'Item 8' },
      { name: 'Item 9' },
      { name: 'Item 10' },
      { name: 'Item 11' },
      { name: 'Item 12' },
    ]
  )

  const [Sections, setSection] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2']
    }
  ])

  const [Refreshing, setRefreshing] = useState(false)
  const onRefresh = () => {
    setRefreshing(true);
    const addingIndex = Sections.length + 1;
    setSection([
      ...Sections,
      {
        title: 'Title' + addingIndex,
        data:
          [
            'Item' + addingIndex + '-1',
            'Item' + addingIndex + '-2',
          ]
      }
    ])
    setRefreshing(false);
  }

  return (

    <View style={styles.body}>

      <SectionList
        keyExtractor={(item, index) => index.toString()}
        sections={Sections}
        renderItem={({ item }) => (
          <Text style={styles.text} >{item}</Text>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.item}>
            <Text style={styles.text} >{section.title}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl
            refreshing={Refreshing}
            onRefresh={onRefresh}
          />
        }
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
  item: {
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
