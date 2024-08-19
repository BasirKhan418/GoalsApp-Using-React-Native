import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Home from "./components/Home";
import { useState } from "react";
import List from "./components/List";
export default function App() {
  const [input, setInput] = useState("");
  const [allgoals, setAllGoals] = useState([]);
  const onChangeHandler = (text) => {
    setInput(text);
  };
  const submitHandler = () => {
    setAllGoals((allgoals) => [
      ...allgoals,
      { key: Math.random().toString(), value: input },
    ]);
    setInput("");
  };
  const removeHandler = (goalId) => {
    setAllGoals((allgoals) => {
      return allgoals.filter((goal) => goal.key !== goalId);
    });
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Home onChangeHandler={onChangeHandler} submitHandler={submitHandler}/>
     
      <View style={styles.list}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
         
            borderWidth:2,
            borderColor:"#000099",
            borderRadius: 10,
            padding: 10,
            color: "white",
          }}
        >
          Your Goals
        </Text>

        <FlatList
          data={allgoals}
          renderItem={(itemData) => {
            return <List value={itemData.item.value} goalid={itemData.item.key} removeHandler={removeHandler}/>;
          }}
          //keyExtractor={(item,index)=>item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor:"#000066",
  },
  TextView: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  list: {
    flex: 5,
    paddingTop: 10,
  },
});
