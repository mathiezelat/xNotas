import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
} from "react-native";

export const ModalItem = ({itemSelected, modalVisible, handleConfirmDelete, handleCancelDelete}) => {
  return (
    <Modal animationType="fade" visible={modalVisible} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalBackground}>
          <View style={styles.modalTexts}>
            <Text style={styles.modalTitle}>
              ¿Estas seguro que desea borrar ?
            </Text>
            <Text style={styles.modalItemTitle}>
              {itemSelected.title}
            </Text>
          </View>
          <View style={styles.modalButtons}>
            <Button
              color="#f36"
              onPress={() => handleConfirmDelete(itemSelected.id)}
              title="Confirm"
            />
          </View>
          <View style={styles.modalButtons}>
            <Button color="#f36" onPress={handleCancelDelete} title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000090",
  },
  modalBackground: {
    backgroundColor: "#85F",
    padding: 40,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 9,
    elevation: 13,
  },
  modalTexts: {
    paddingBottom: 20,
    paddingTop: 5,
  },
  modalTitle: {
    fontSize: 18,
    paddingBottom: 15,
  },
  modalItemTitle: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "#00000065",
    borderRadius: 14,
  },
  modalButtons: {
    margin: 5,
  },
});
