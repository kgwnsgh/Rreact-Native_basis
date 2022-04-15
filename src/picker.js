import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
// Picker 사용을 위해서는 터미널에 설치가 필요하다 npm install @react-native-picker/picker --save
// Picker는 원하는 값을 선택하는 창이라고 보면 된다

//Picker 랑 Slider 활용

class picker extends Component {
  state = {
    country: 'korea',
    value: 50,
  };

  onValueChange = value => {
    this.setState({
      value: value,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Slider
          style={{height: 40, width: 300}}
          value={this.state.value}
          minimumValue={0}
          maximumValue={100}
          onValueChange={this.onValueChange}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="red"
          step={1} // 변하는값의 텀을 정해주는것 1로 설정하면 1씩 상승하고 줄어듬
        />
        <Text style={styles.input}>{this.state.value}</Text>

        <ActivityIndicator
          style={{paddingTop: 200}}
          size="large"
          color="green"
          animating={true} // 서버에 요청한 자료를 수신할때 자주 사용 요청할때 true 서버에서 값을 받으면 false로 처리
        />
        <Picker
          style={{height: 50, width: 250}}
          selectedValue={this.state.country}
          onValueChange={(val, idx) => this.setState({country: val})}>
          <Picker.Item label="Korea" value="korea" />
          <Picker.Item label="Canada" value="canada" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginTop: 20,
    fontSize: 25,
  },
});

export default picker;
