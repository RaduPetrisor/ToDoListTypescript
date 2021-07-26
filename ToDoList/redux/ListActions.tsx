import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE, DELETE_TASK } from "./ListType"
import { Platform } from "react-native"
import { List } from "../modules/List"


export const fetchTasksRequest=()=>{
    return {
        type: FETCH_TASKS_REQUEST,
    }
}

export const fetchTasksSuccess=(tasks: List[])=>{
    return {
        type: FETCH_TASKS_SUCCESS,
        payload: tasks,
    }
}
export const fetchTasksFailure=(error: string)=>{
    return {
        type: FETCH_TASKS_FAILURE,
        payload: error,
    }
}
export const deleteTasksSuccess=(tasks: List[])=>{
    return{
        type: DELETE_TASK,
        payload: tasks
    }
}
export const deleteTasks=(key: number,setTasks: Function)=>
{
    return (dispatch: any) => {
            setTasks((prevTask: List[])=> {
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
              return prevTask.filter((task: List) => task.getId()!=key)});
          }
}
export const fetchTasks=()=>{
    return (dispatch: any) => {
        dispatch(fetchTasksRequest());
        if(Platform.OS==='android')
        {
            fetch('http://10.0.2.2:8000/tasks')
        .then(res=>{
          return res.json();})
          .then((data)=>{
            const arrayList: List [] = [];
            let newList: List;
            data.map((task: any) => {
              if(task.task.includes('home'))
              {
                  newList= new List(task.task,task.id,"home");
                  arrayList.push(newList);
              }
            else if(task.task.includes('Home'))
              {
                  newList= new List(task.task,task.id,"home");
                  arrayList.push(newList);
              }
            else if(task.task.includes('Work'))
              {
                  newList= new List(task.task,task.id,"work");
                  arrayList.push(newList);
              }
            else if(task.task.includes('work'))
              {
                  console.log("\nWork here\n");
                  newList= new List(task.task,task.id,"work");
                  arrayList.push(newList);
              }
            else if(task.task.includes('buy'))
              {
                  newList= new List(task.task,task.id,"shopping");
                  arrayList.push(newList);
              }
            else if(task.task.includes('Buy'))
              {
                  newList= new List(task.task,task.id,"shopping");
                  arrayList.push(newList);
              }
            else
              {
                  newList= new List(task.task,task.id,"others");
                  arrayList.push(newList);
              }
            
               }
            )
            dispatch(fetchTasksSuccess(arrayList));
        }).catch(error => {
            dispatch(fetchTasksFailure(error.message));
        })
        }
        else{     
        fetch('http://localhost:8000/tasks')
        .then(res=>{
          return res.json();})
        .then((data)=>{
            const arrayList: List [] = [];
            let newList: List;
            data.map((task: any) => {
                   if(task.task.includes('home'))
                    {
                        newList= new List(task.task,task.id,"home");
                        arrayList.push(newList);
                    }
                  else if(task.task.includes('Home'))
                    {
                        newList= new List(task.task,task.id,"home");
                        arrayList.push(newList);
                    }
                  else if(task.task.includes('Work'))
                    {
                        newList= new List(task.task,task.id,"work");
                        arrayList.push(newList);
                    }
                  else if(task.task.includes('work'))
                    {
                        console.log("\nWork here\n");
                        newList= new List(task.task,task.id,"work");
                        arrayList.push(newList);
                    }
                  else if(task.task.includes('buy'))
                    {
                        newList= new List(task.task,task.id,"shopping");
                        arrayList.push(newList);
                    }
                  else if(task.task.includes('Buy'))
                    {
                        newList= new List(task.task,task.id,"shopping");
                        arrayList.push(newList);
                    }
                  else
                    {
                        newList= new List(task.task,task.id,"others");
                        arrayList.push(newList);
                    }
                  
               }
            )
            dispatch(fetchTasksSuccess(arrayList));
        }).catch(error => {
            dispatch(fetchTasksFailure(error.message));
        })
    }
    }
}
