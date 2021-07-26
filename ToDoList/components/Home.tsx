
import React, { useState,useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Alert,TouchableWithoutFeedback,Keyboard, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { fetchTasks } from "../redux/ListActions";
import { useSelector, useDispatch } from 'react-redux';



 function Home(props:any) {
  
  const {navigation} = props;
  const init = useSelector((state:any) => state.reducer.tasks);
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState(init);

  function update():void{
    dispatch(fetchTasks());
    setTasks(init);
  }
  
  useEffect( () => {
    dispatch(fetchTasks());
    setTasks(init);
  },[])

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <View style={styles.content}>
          <TouchableOpacity style={styles.buttonText}
           onPress={()=> {
             update();
             if(tasks!=null){
               navigation.navigate('HomeTasks',{item: init})}}}>
              <Text style={styles.textColor}>
                  Home Tasks
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonText}
           onPress={()=> {
            update();
             if(tasks!=null){
               navigation.navigate('WorkTasks',{item: init})}}}>
              <Text style={styles.textColor}>
                  Work Tasks
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonText}
           onPress={()=> {
            update();
             if(tasks!=null){
               navigation.navigate('ShoppingTasks',{item: tasks})}}}>
              <Text style={styles.textColor}>
                  Shopping Tasks
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonText}
           onPress={()=> {
            update();
             if(tasks!=null){
               navigation.navigate('OtherTasks',{item: init})}}}>
              <Text style={styles.textColor}>
                  Other Tasks
              </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonText}
           onPress={()=> {
            update();
             if(tasks!=null){
               navigation.navigate('AddTaskPage',{item: init})}}}>
              <Text style={styles.textColor}>
                 Add Task
              </Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
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
  buttonText: {
    marginTop: 20,
    marginLeft: 95,
    width: 130,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'royalblue',
  },
  textColor:{
      color:'white',
      fontWeight:'bold',
  },
  scrollView:{
    flex:1,
  }
});


export default Home;