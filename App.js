import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>React Native Tutorials</Text>
      <TextInput
        placeholder='Enter a task' 
        style={styles.input}
      />
      <TouchableOpacity>
        <Text style={styles.button}>Add</Text>
      </TouchableOpacity>
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
    marginVertical:10,
    fontSize: 23,
    fontWeight: '700',
    color: "#BABABA",
    alignItems: "center",
    marginTop: 30,
  },
  input: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    height: "30px",
  }
});
