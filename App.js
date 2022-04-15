/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React, { Component } from 'react';
// import { View, Text } from 'react-native';

// const App= () => {
//   // render() {
//     return (
//       <View style={{
//         backgroundColor: "green",
//         height: '100%',
//         paddingTop: 50,
//       }}>
//         <View>
//           <Text>Hello world!!</Text>
//         </View>
//         <View>
//           <Text>Hello world!!</Text>
//         </View>
//         <View>
//           <Text>Hello world!!</Text>
//         </View>
//       </View>
//     );
//   }

// export default App;
// 회사에서는 함수형으로 많이 활용하기 때문에 함수형 컴포트를 배울 필요가 있다

// import React, { Component } from 'react';
// import { View, Text, StyleSheet} from 'react-native';

// class App extends Component {
//   render() {
//     return (
//       <View style={styles.mainView}>
//         <View style={styles.subView}>
//           <Text style={styles.mainText}>Hello wordl!!</Text>
//         </View>
//         <View style={styles.subView}>
//           <Text>Hello wordl!!</Text>
//         </View>
//         <View style={styles.anotherrSubView}>
//         <Text style={styles.mainText}>Hello wordl!!</Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   mainView: {
//     flex: 1,
//     backgroundColor: "green",
//     paddingTop: 50,
//     alignItems: 'center',
//     justifyContent:'center'
//   },
//   subView: {
//     backgroundColor: 'yellow',
//     flex: 1,
//     marginBottom: 10,
//     width: '50%'
//   },
//   anotherrSubView: {
//     backgroundColor: 'orange',
//     flex: 2,
//     marginBottom: 10,
//     width: "100%",
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   mainText: {
//     fontSize: 50,
//     fontWeight: 'bold',
//     color: 'red',
//     padding: 20
//   }
// })
// // width를 적용시키지 않으면 글자의 크기에 따라 width값이 변경되는 경우가 있음
// // style에는 styleSheet를 따로 두지 않고 대상에 직접 적용을 시킬 수 있다

// export default App;

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
  Image,
} from 'react-native';
import Header from './src/Header';
import Generator from './src/Generator';
import NumList from './src/NumList';
import Input from './src/input';
import Picker from './src/picker';
import Rainbow from './assets/images/rw.jpg';
import UseImage from './src/image';
import UseStyle from './src/styleSheet';
import Modal from './src/modal';

class App extends Component {
  state = {
    appName: 'My First App',
    random: [36, 999],
    myTextInput: '',
    alphabet: ['a', 'b', 'c', 'd'],
  };

  onChangeInput = event => {
    this.setState({
      myTextInput: event,
    });
  };

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNum],
      };
    });
  };

  onNumDelete = position => {
    const newArray = this.state.random.filter((num, index) => {
      return position !== index;
    });
    this.setState({
      random: newArray,
    });
  };

  addTextInput = () => {
    this.setState(prevState => {
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput],
      };
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        {/* <UseStyle /> */}
        {/* <Header name={this.state.appName} /> */}
        {/* <Picker />  */}
        {/* <UseImage /> */}

        {/* <Generator add={this.onAddRandomNum} />
        <ScrollView
          style={{width: '100%'}}
          // onMomentumScrollBegin={()=>alert('begin')} //스크롤을 놓았을때
          // onMomentumScrollEnd={()=>alert('end')} // 스크롤이 멈췄을때
          // onScroll={()=>alert('onScroll')} //스크롤이 조금이라도 움직이면
          // onContentSizeChange={(width, height)=> alert(height)} // 사이즈가 바뀔때 나타나는 창
          // bounces={false} //동적이게 튕기는 느낌이 나는것을 조절함
        >
          <NumList num={this.state.random} delete={this.onNumDelete} />
        </ScrollView> */}
        {/* <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput} // 텍스트 입력을 위해 필요
          multiline={true} // 자동 줄바꿈
          maxLength={100} // 글자 수 제한
          autoCapitalize={'none'} // 자동 첫글자 대문자 변환을 막아줌 이메일 로그인 같은곳에 사용
          editable={true} // false일때는 글자 수정이나 작성이 불가능해 진다
        />
        <Button title="Add Text Input" onPress={this.addTextInput} />
        <ScrollView style={{width: '100%'}}>
          {this.state.alphabet.map((item, idx) => (
            <Text style={styles.mainText} key={idx}>
              {item}
            </Text>
          ))}
        </ScrollView> */}

        <Modal />
      </View>
    );
  }
}

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
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    fontSize: 25,
    padding: 10,
    marginTop: 20,
  },
});
// width를 적용시키지 않으면 글자의 크기에 따라 width값이 변경되는 경우가 있음

export default App;
