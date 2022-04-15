import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Rainbow from '../assets/images/rw.jpg';

const image = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={Rainbow}
        // source={{uri: 'https://picsum.photos/id/237/300/500'}}
        resizeMode="contain"
        onLoadEnd={() => alert('image Loaded!')}
      />
      {/* 서버에서 가지고 온 이미지는 import시켜서 확인하려 하면 안나옴 ? 이유가 필요 */}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {},
});

export default image;
