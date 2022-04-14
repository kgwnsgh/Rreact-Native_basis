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


import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Header from './src/Header';
import Generator from './src/Generator';
import NumList from './src/NumList';

class App extends Component {

  state = {
    appName: "My First App",
    random: [36, 999]
  }

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random()*100) + 1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNum],
      }
    })
  }

  onNumDelete = (position) => {
    const newArray = this.state.random.filter((num, index) => {
      return position != index;
    })
    this.setState({
      random: newArray
    })
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View>
          <View style={styles.subView}>
            <Text style={styles.mainText}>Hello wordl!!</Text>
          </View>
            <Header name={this.state.appName} />
          <Text
            style={styles.mainText}
            onPress={() => alert('text touch event')}
           >Hi</Text>
           </View>
           <Generator add={this.onAddRandomNum} />
           <NumList 
            num={this.state.random} 
            delete={this.onNumDelete}
           />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    alignItems: 'center'
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherrSubView: {
    backgroundColor: 'orange',
    flex: 2,
    marginBottom: 10,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20
  }
})
// width를 적용시키지 않으면 글자의 크기에 따라 width값이 변경되는 경우가 있음

export default App;


