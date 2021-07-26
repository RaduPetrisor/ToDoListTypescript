import React, { useState } from 'react';
import { StyleSheet,View, Text, TextInput, Button} from 'react-native';

interface FuncProps {
    pressHandler: ( task: string) => void;
}
 export const AddTask: React.FC<FuncProps>=(props)=>{

    const [newTask,setNewTask]= useState('');
    const changeHandler=(val: string)=>{
       setNewTask(val);
    }
     return(
      <View>
          <TextInput
           style={styles.input}
           placeholder='What task do you want to add?'
           onChangeText={changeHandler}
          />
          <Button
            onPress={()=>props.pressHandler(newTask)} 
            title='Add Task' 
            color='royalblue'
          />
      </View>
     );
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})