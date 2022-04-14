import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Generator = props => {
  return (
    <View style={styles.Generator}>
      <Button title="add Number" onPress={() => props.add()} />
    </View>
  );
};

const styles = StyleSheet.create({
  Generator: {
    backgroundColor: '#D197CF',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Generator;
