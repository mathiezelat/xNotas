import React from 'react';
import { StyleSheet, View, TextInput, Button} from 'react-native';

export const Input = ({text, setText, handleAdd}) =>{
    return(
    <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Item de lista" 
        style={styles.input} 
        value={text}
        onChangeText={setText}
        placeholderTextColor={'#a0a0a0'}
        />
        <Button color="#85F" title="ADD" onPress={handleAdd} />
    </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        width:250,
        borderBottomColor: '#85F', 
        borderBottomWidth:1,
        color: 'white'
    },
})