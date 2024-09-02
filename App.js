import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View>
    <Text style={{ fontSize: 49 }}>Grid with dynamic data</Text>
    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text style={styles.item}>Musrat</Text>
        <Text style={styles.item}>khushi</Text>
        <Text style={styles.item}>khushi</Text>
        <Text style={styles.item}>khushi</Text>
        <Text style={styles.item}>khushi</Text>
        <Text style={styles.item}>khushi</Text>
        <Text style={styles.item}>khushi</Text>
        <Text style={styles.item}>khushi</Text>
        <Text style={styles.item}>khushi</Text>
        <Text style={styles.item}>khushi</Text>
        <Text style={styles.item}>khushi</Text>
        <Text style={styles.item}>Musrat</Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 30,
    backgroundColor: 'red',
    color: '#fff',
    margin: 5,
    padding: 5,
    width: 110,
    height: 110,
   
  },
});
