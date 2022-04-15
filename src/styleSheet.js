import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styleSheet = () => {
  return (
    <View>
      <View style={styles.subView}>
        <Text style={styles.mainText}>Hello wordl!!</Text>
      </View>
      <Text style={styles.mainText} onPress={() => alert('text touch event')}>
        Hi
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherrSubView: {
    backgroundColor: 'orange',
    flex: 2,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
    backgroundColor: 'pink',
    margin: 20,
  },
});

export default styleSheet;
