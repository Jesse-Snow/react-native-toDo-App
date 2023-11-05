import { useState } from 'react';
import { Text,StyleSheet,View,ScrollView,TextInput,TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 

import { Task } from './components/Task';

export default function App(){
  const [tarefa,setTarefa] = useState('');
  const [tasks,setTasks] = useState([]);

  function handleAddTarefa(){
    if(tarefa){
      setTasks([...tasks,tarefa]);
      setTarefa('');
    }

  }

  function handleDeleteTask(taskDescription){
    let allTasks = tasks;
    const tasksNotIn = allTasks.filter( value => taskDescription != value);


    setTasks(tasksNotIn);
  }

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>Tarefas</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input}
            placeholder='Digite a tarefa aqui'
            defaultValue={tarefa}
            onChangeText={(text) => setTarefa(text)}
          />
          <TouchableNativeFeedback 
            style={styles.button}
            onPress={handleAddTarefa}  
          >
            <Icon name='plus-square' size={45} color='white'/>
          </TouchableNativeFeedback>
        </View>
      </View>

      <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.scrollContentContainer}
      >
        {tasks && 
          (
            tasks.map((value,index) => (
              <Task 
                key={index} 
                description={value} 
                handleDeleteTask={() => handleDeleteTask(value)}
              />
            ))
          )
        }
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{

  },
  headerContainer: { 
    backgroundColor:'#033F63',
    height:250,
    justifyContent:'center',
    alignItems:'center',
  },
  header: { 
    color:'white',
    fontSize:50,
    paddingTop:40
  },
  inputContainer:{
    flexDirection:'row',
    paddingTop:40,
  },
  input: {
    backgroundColor:'white',
    borderRadius:5,
    width:'75%',
    padding:10,
    height:45
  },
  button:{
    width:'25%',
    height:45
  },
  scrollContainer:{
    height:515,
    paddingTop:8
  },
  scrollContentContainer:{
    alignItems:'center'
  }
});