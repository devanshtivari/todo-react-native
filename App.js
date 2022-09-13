import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from 'react';
import SingleTodo from './components/singletodo'

export default function App() {
  const[todo , setTodo] = useState('');
  const[todos , setTodos] = useState([]);
  
  function addItem(){
    if(!todo) return

    setTodos([...todos,{ id: Date.now() , text: todo}]);
    setTodo("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Task to be Done</Text>
      <View style={styles.inputcontainer}>
      <TextInput
        placeholder='Enter a task'
        value={todo}
        onChangeText={text => setTodo(text)} 
        style={styles.input}
      />
      <TouchableOpacity style={styles.inputButton}>
        <Text style={styles.button} onPress={addItem}>Add</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.items}>
        <FlatList
          data={todos}
          renderItem={
            ({item})=><SingleTodo todo={item} setTodo={setTodos}/>
          }
          keyExtractor={
            (item)=>item.id.toString()
          }
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  heading: {
    marginVertical: 10,
    fontSize: 23,
    fontWeight: "700",
    color: "#BABABA",
    alignItems: "center",
    marginTop: 30,
  },
  inputcontainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: "5%",
    shadowColor: "#8A8A8A",
    elevation: 10
  },
  inputButton: {
    borderRadius: 10,
  },
  button: {
    color: "white",
    backgroundColor: "blue",
    position: "absolute",
    left: -65,
    top: -18,
    paddingLeft: 19,
    paddingRight: 19,
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 10,
  },
  items:{
    marginTop: 60,
    width: "100%",
    borderRadius: 15
  }
});
