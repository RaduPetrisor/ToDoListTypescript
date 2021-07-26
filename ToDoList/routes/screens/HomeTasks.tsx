import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert,TouchableWithoutFeedback,Keyboard, Platform } from 'react-native';
import { Task } from './AddTask/Task';
import { useDispatch } from 'react-redux';
import { List } from '../../modules/List'



export default function HomeTasks(props:any) {
  const { route } = props;
  const { item } = route.params;
  const dispatch = useDispatch();
  const [tasks, setTasks]= useState(item);
  {/*const pressHandler=(key)=>{
    setTasks((prevTask)=> {
      if(Platform.OS==='android')
      {
        fetch('http://10.0.2.2:8000/tasks'+ key,{
        method: 'DELETE'
      }
      ).then(()=>{dispatch(fetchTasks())})
      }
      else{
     fetch('http://localhost:8000/tasks/'+ key,{
        method: 'DELETE'
      }
      ).then(()=>{
        dispatch(fetchTasks());
      })
    }
      return prevTask.filter(task=>task.id!=key)});
  }*/}

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={tasks.filter((task: List)=> task.getListType()==="home")}
            renderItem={({ item }) => (
              <Task item={item} pressHandler={setTasks}/>
            )}
            />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});