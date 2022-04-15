/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {useState} from 'react/cjs/react.production.min';

const input2 = () => {
  const [myText, setMyText] = useState('');

  const onChangeInput = e => {
    setMyText(e.target.value);
  };

  return (
    <View>
      <TextInput
        value={myText}
        style={styles.Input}
        onChange={onChangeInput}
        multiline={true}
        maxLength={100}
        autoCapitalize={'none'}
        editable={true}
      />
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
