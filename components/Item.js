import React from 'react';
import { StyleSheet, View, Button, Text} from 'react-native';  

export const Item = ({title, id, handleModal})=>{
    return(
    <View style={styles.item}>
        <Text style={styles.titleItem} >{title}</Text>
        <Button 
        title="x" 
        color="#f36" 
        onPress={()=> handleModal(id)} ></Button>
    </View>
    )
}
const styles = StyleSheet.create({
    item:{
        padding: 20,
        backgroundColor: '#85F',
        marginTop: 20,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleItem:{
        color: 'white',
        width: 230
    }
})