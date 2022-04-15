import React, {Component} from 'react';
import {View, Text, Button, Modal} from 'react-native';

class modal extends Component {
  state = {
    modal: false,
  };

  handleModal = () => {
    this.setState({
      modal: this.state.modal ? false : true,
    });
  };
  render() {
    return (
      <View>
        <Button
          style={{width: '100%'}}
          title="Open Modal"
          onPress={this.handleModal}
        />
        <Modal
          visible={this.state.modal}
          animationType={'slide'}
          onShow={() => alert('woring!')}>
          <View style={{marginTop: 60, backgroundColor: 'red'}}>
            <Text>This is modal contant</Text>
          </View>
          <Button
            style={{width: '100%'}}
            title="Go Back"
            onPress={this.handleModal}
          />
        </Modal>
      </View>
    );
  }
}

export default modal;
