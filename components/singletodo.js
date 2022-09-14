import React,{useState,useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SingleTodo({todo , setTodos , todos }){
    const[edit,setEdit] = useState(false);
    const[edittext,setEdittext] = useState(todo.text);

    useEffect(() => {
      AsyncStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);
    
    
    const handleEdit = ()=> {
      if(!edit){setEdit(!edit);}
      else{
        setEdit(!edit);
        setTodos(todos.map((t)=>
         t.id === todo.id ? {
          id: t.id,
          text: edittext,
         }:t
        ));
        AsyncStorage.setItem("todos" , JSON.stringify(todos));
      }
    }
    const fetchTodo = async()=> {
      const data = await AsyncStorage.getItem("todos");
      if(data){ setTodos(JSON.parse(data)); console.log(data)}
    }; 

    useEffect(() => {
      fetchTodo();
    }, []);
    

    const handleDelete = (id) => {
      setTodos(todos.filter((t) => t.id !== id));
    }
    return (
      <View style={styles.todo}>
        {!edit ? (
          <Text style={styles.todotext}>{todo.text}</Text>
        ) : (
          <TextInput
            style={styles.todoedit}
            value={edittext}
            onChangeText={(text) => setEdittext(text)}
          />
        )}
        <TouchableOpacity>
            <Feather
              style={styles.todoactions}
              name="edit"
              size={23}
              color="black"
              onPress={handleEdit}
            />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            style={styles.todoactions}
            name="delete"
            size={23}
            color="black"
            onPress={() => handleDelete(todo.id)}
          />
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        backgroundColor: 'linen',
        marginHorizontal: 12,
        elevation: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: 'white',
        marginBottom: 10,
        borderRadius: 15,
    },
    todotext:{
        flex:1,
        fontSize: 18,
        paddingVertical: 3,
        padddingHorizontal: 5,
    },
    todoactions: {
        marginLeft: 15,
        marginTop: 5
    },
    todoedit: {
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 5,
        borderRadius: 5,
        borderColor: "gray",
        borderWidth: 1,
    }
})