import React from 'react';
import {FlatList} from 'react-native';
import { Item } from './Item';


export const ItemList = ({itemList, handleModal})=>{
    const renderItem = ({ item }) =>{
        return(
        <Item title={item.title} id={item.id} handleModal={handleModal}/>
        )
    }
    return(
        <FlatList  
        data={itemList}
        renderItem={renderItem}
        keyExtractor={item => item.id}/>
    )
}