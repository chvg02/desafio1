import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  function handleAddTask(newTaskTitle: string) {
   
    const tas = {
      id  : new Date().getTime(),
      title : newTaskTitle,
      done : false
    } 

    setTasks(oldState => [...oldState,tas]);
  }
  
  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map(task => ({ ...task }))
    const abc = updatedTasks.find(taskk=> taskk.id==id);
    if(abc?.done==false){
      abc.done=true
    }else if(abc?.done==true){
      abc.done=false
    }
    setTasks([...updatedTasks])
    

  }

  function handleRemoveTask(id: number) {
    
    setTasks(oldState => oldState.filter(
              taskss =>taskss.id!=id))

  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})