import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const input2 = () => {
  const myText = '';

  return (
    <View>
      <TextInput value={myText} style={styles.Input} />
    </View>
  );
};

const styles = StyleSheet.create({
  Input: {
    width: '100%',
    backgroundColor: 'orange',
    marginTop: 10,
  },
});
export default input2;
