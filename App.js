import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import { ModalItem } from './components/Modal';
import { Input } from './components/Input';
import { ItemList } from './components/ItemList';

export default function App() {
  const [itemList, setItemList] = useState([])
  const [text, setText] = useState("")
  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)
  const handleAdd = ()=>{
    if (text === '') return;
    setItemList((prevItems)=>{
      return [...prevItems, {title: text,id: `${Math.random() * 100}` }]
    });
    setText("")
  }
  const handleConfirmDelete = id => {
    setItemList(itemList.filter(item => item.id !== id));
    setModalVisible(false);
    setItemSelected({});
  }
  const handleCancelDelete = ()=>{
    setModalVisible(false);
    setItemSelected({});
  }
  const handleModal = id => {
    setItemSelected(itemList.find(item=> item.id === id));
    setModalVisible(true);
  }

  return (
    <View style={styles.screen}>
      <Input text={text} setText={setText} handleAdd={handleAdd} />
      <ItemList itemList={itemList} handleModal={handleModal} />
      <ModalItem 
      itemSelected={itemSelected} 
      modalVisible={modalVisible} 
      handleConfirmDelete={handleConfirmDelete}
      handleCancelDelete={handleCancelDelete}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#85F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  screen:{
    padding:20,
    paddingTop:70,
    backgroundColor: '#000',
    flex: 1,
    paddingBottom: 0
  },
});
