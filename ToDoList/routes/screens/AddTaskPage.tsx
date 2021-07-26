import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert,TouchableWithoutFeedback,Keyboard, Platform } from 'react-native';
import { Task } from './AddTask/Task';
import { AddTask } from './AddTask/AddTask';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../../redux/ListActions';
import { List } from '../../modules/List';



export default function AddTaskPage(props:{route: any, item: List[]}) {
    const { route } = props;
    const { item } = route.params;
    const dispatch = useDispatch();
    const [tasks, setTasks]= useState(item);

  const addButton=(task: string): List[]=>{
    
    const taskText:{task:string, id:number}={task: task, id: Math.random() };
    if(task.length >1){

    setTasks((prevTasks: List[])=>{
      if(Platform.OS==='android')
      {
        fetch('http://10.0.2.2:8000/tasks',{
          method: 'POST',
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify(taskText),
        }).then(() => { dispatch(fetchTasks()) })
      }
      else{
        fetch('http://localhost:8000/tasks',{
        method: 'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(taskText),
      }).then(() => { dispatch(fetchTasks()) })
    }
    let newTask=new List(taskText.task,taskText.id,"others");
    if(newTask.getTask().includes('home'))
    {
        newTask.setType("home");
    }
    else if(newTask.getTask().includes('Home'))
    {
        newTask.setType("home");
    }
    else if(newTask.getTask().includes('Work'))
    {
        newTask.setType("work");
    }
    else if(newTask.getTask().includes('work'))
    {
        newTask.setType("work");
    }
    else if(newTask.getTask().includes('buy'))
    {
        newTask.setType("shopping");
    }
    else if(newTask.getTask().includes('Buy'))
    {
        newTask.setType("shopping");
    }
    else
    {
        newTask.setType("others");
    }
    let returned:List[]=[newTask,...prevTasks];
      return returned;
    })
  }
  else{
    Alert.alert("Your task must have more than only 1 character!",'OK')
  }
  let list:List[]=[];
  return list;
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <View style={styles.content}>
        <AddTask pressHandler={addButton}/>
        <View style={styles.list}>
          <FlatList
            data={tasks}
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