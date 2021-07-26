import * as React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import AddTaskPage from './screens/AddTaskPage';
import HomeTasks from './screens/HomeTasks';
import OtherTasks from './screens/OtherTasks';
import ShoppingTasks from './screens/ShoppingTasks';
import WorkTasks from './screens/WorkTasks';
import Home from '../components/Home';
import { Button } from 'react-native';


const Stack=createStackNavigator();

function HomeStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} options={{title: 'Home'}} />
                <Stack.Screen name='HomeTasks' component={HomeTasks} options={{title: 'Home Tasks'}} />
                <Stack.Screen name='AddTaskPage' component={AddTaskPage} options={{title: 'Add Task'}}/>
                <Stack.Screen name='OtherTasks' component={OtherTasks} options={{title: 'Other Tasks'}} />
                <Stack.Screen name='ShoppingTasks' component={ShoppingTasks} options={{title: 'Shopping Tasks'}} />
                <Stack.Screen name='WorkTasks' component={WorkTasks} options={{title: 'Work Tasks'}} />
                <Button title="New Button" onPress={()=>{}}/>
                <Button title="New Button1" onPress={()=>{}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default HomeStack;