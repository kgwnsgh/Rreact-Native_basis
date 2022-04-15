import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

// Press 이벤트 종류와 사용법

const Header = props => {
  return (
    <TouchableOpacity
      style={styles.header}
      onPress={() => alert('hello world!!')}
      onLongPress={() => alert('LongPress This')} // 길게누를때
      onPressIn={() => alert('onpressIn !')} // 누르기 시작할때
      onPressOut={() => alert('onPressOut !')} // 누르고 버튼 놓을때
    >
      <View>
        <Text>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Header;
