import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';




const Header = (props) => {
    return (
        <TouchableOpacity
            style={styles.header}
            onPress={() => alert('hello world!!')}
            onLongPress={() => alert('LongPress This')}
            onPressIn={() => alert('onpressIn !')}
            onPressOut={() => alert('onPressOut !')}
        >
            <View >
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
        width: "100%"
    }
})

export default Header;