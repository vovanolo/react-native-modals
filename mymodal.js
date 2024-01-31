// CustomModal.js
import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const MyModal = ({ isVisible, onClose }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.modalContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Custom Modal</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tincidunt felis.
              Pellentesque sit amet ex vitae turpis ultricies eleifend non non nulla. Sed vel urna
              et lacus luctus eleifend at a metus. Vestibulum sit amet turpis nec odio scelerisque
              laoreet. Nulla facilisi. Nullam et lectus vitae mi efficitur feugiat. Proin tempus
              augue non elit feugiat, non pharetra leo imperdiet.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tincidunt felis.
              Pellentesque sit amet ex vitae turpis ultricies eleifend non non nulla. Sed vel urna
              et lacus luctus eleifend at a metus. Vestibulum sit amet turpis nec odio scelerisque
              laoreet. Nulla facilisi. Nullam et lectus vitae mi efficitur feugiat. Proin tempus
              augue non elit feugiat, non pharetra leo imperdiet.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tincidunt felis.
              Pellentesque sit amet ex vitae turpis ultricies eleifend non non nulla. Sed vel urna
              et lacus luctus eleifend at a metus. Vestibulum sit amet turpis nec odio scelerisque
              laoreet. Nulla facilisi. Nullam et lectus vitae mi efficitur feugiat. Proin tempus
              augue non elit feugiat, non pharetra leo imperdiet.
            </Text>
            {/* Additional text content for testing scroll */}
            <Text>
              More content 1. Mauris id ex nec felis dapibus ultricies. Integer ut enim a justo
              fringilla iaculis. Vivamus hendrerit luctus libero, vitae tristique odio cursus nec.
            </Text>
            <Text>
              More content 2. Duis malesuada est sed metus sagittis, nec ultricies risus auctor.
              Nulla facilisi. Vivamus sagittis quam non congue hendrerit. Sed vel hendrerit velit.
            </Text>
            <Text>
              More content 3. Quisque a ex vel semper justo. Integer commodo magna a aliquet
              fermentum. Suspendisse potenti. Sed euismod erat vitae est rhoncus, vel bibendum neque
              malesuada.
            </Text>
            {/* End of additional text content */}
            <Button title="Close Modal" onPress={onClose} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    maxHeight: "100px"
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    flex:1
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default MyModal;
