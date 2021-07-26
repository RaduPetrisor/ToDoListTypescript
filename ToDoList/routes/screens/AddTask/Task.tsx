import React, { useState } from 'react';
import { StyleSheet, Text,  Touchable,  TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';
import { List } from '../../../modules/List';
import { deleteTasks } from '../../../redux/ListActions';

interface Props {
     item: List; pressHandler: any; 
}

export const Task: React.FC<Props> = (props) => {
    const dispatch=useDispatch();
     return(
       <TouchableOpacity onPress={()=> dispatch(deleteTasks(props.item.getId(),props.pressHandler))}>
           <Text style={styles.item}>
               {props.item.getTask()}
           </Text>
       </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    item:{
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})