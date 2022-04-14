import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class input extends Component {
  state = {
    myTextInput: '',
  };

  onChangeInput = event => {
    this.setState({
      myTextInput: event,
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput} // 텍스트 입력을 위해 필요
          multiline={true} // 자동 줄바꿈
          maxLength={100} // 글자 수 제한
          autoCapitalize={'none'} // 자동 첫글자 대문자 변환을 막아줌 이메일 로그인 같은곳에 사용
          editable={true} // false일때는 글자 수정이나 작성이 불가능해 진다
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    fontSize: 25,
    padding: 10,
    marginTop: 20,
  },
});

export default input;
