import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { Task } from './AddTask/Task';
import { useDispatch } from 'react-redux';
import { List } from '../../modules/List'


export default function OtherTasks(props: any) {
  const { route } = props;
  const { item } = route.params;
  const dispatch = useDispatch();
  const [tasks, setTasks]= useState(item);
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={tasks.filter((task: List) => task.getListType()==="others")}
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