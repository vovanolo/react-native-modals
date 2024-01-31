// App.js
import React, { useState } from 'react';
import { View, Button, Modal } from 'react-native';
import MyModal from './mymodal';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <MyModal isVisible={modalVisible} onClose={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
}
