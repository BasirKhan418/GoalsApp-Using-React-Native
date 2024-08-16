import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
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
    alert("Goal Added Successfully");
  };
  return (
    <View style={styles.container}>
      <View style={styles.TextView}>
        <TextInput
          placeholder="Enter your name"
          style={styles.TextInput}
          onChangeText={onChangeHandler}
        />
        <Button title="Submit" onPress={submitHandler} />
      </View>
      <View style={styles.list}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            borderBottomWidth: 2,
            borderColor: "lightblue",
            borderRadius: 10,
            padding: 10,
            color: "black",
          }}
        >
          Your Goals : -
        </Text>

        <FlatList
          data={allgoals}
          renderItem={(itemData) => {
            return <List value={itemData.item.value} />;
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
  },
  TextInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 10,
    width: "80%",
    padding: 8,
    marginRight: 10,
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
