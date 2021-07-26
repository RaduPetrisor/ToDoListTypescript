{/*import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './tasks/Header.js';
import Task from './tasks/Task.js';
import AddTask from './tasks/AddTask';
import Navigator from './routes/HomeStack';


export default function App() {
  const [tasks, setTasks] = useState([
    { task: 'eat a burger', key: '1' },
    { task: 'have fun', key: '2' },
    { task: 'go to work', key: '3' },
    { task: 'play fotball', key: '4' },
    { task: 'eat pizza', key: '5' },
    { task: 'do something', key: '6' },
  ]);

  const pressHandler=(key)=>{
    setTasks((prevTask)=> {
      return prevTask.filter(task=>task.key!=key)
    });
  }
  const addButton=(task)=>{
    
    if(task.length >1){

    setTasks((prevTasks)=>{
      return [
        {task: task, key: Math.random().toString() },
        ...prevTasks
      ];
    })
  }
  else{
    Alert.alert("Your task must have more than only 1 character!",[
      {text:'OK'}
    ])
  }
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTask pressHandler={addButton}/>
        <View style={styles.list}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <Task item={item} pressHandler={pressHandler}/>
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
});*/}

import React from 'react';
import HomeStack from './routes/HomeStack';
import store from './store';
import { Provider } from 'react-redux';

export default function App()
{
  return(
    <Provider store={store()}>
    <HomeStack />
    </Provider>
  )
}

