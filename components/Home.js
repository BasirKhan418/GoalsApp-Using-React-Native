import React ,{useState}from 'react'
import { View,Text,Modal,StyleSheet ,TextInput,Button, Pressable,Image} from 'react-native';
const Home = (props) => {
    const [open,setOpen] = useState(false);
    const Open = ()=>{
        setOpen(true);
    }
    const Close = ()=>{
        setOpen(false);
    }
    const submitHandler = () => {
        props.submitHandler();
        setOpen(false);
    }
  return (
    
    <View style={styles.container}>
        <Pressable onPress={Open} >
            <Text style={styles.button} android_ripple={{color:"pink"}}>
                Add Goal
            </Text>
        </Pressable>
    <Modal visible={open} animationType={"slide"}>
        <View style={{backgroundColor:"#000066",padding:10,justifyContent:"center",alignItems:"center",height:"100%"}}>

        <Image source={require("../assets/icon.png")} style={{height:300
            , width:300}}/>
            <View/>
      <TextInput
        placeholder="Enter your goal here...!"
        style={styles.TextInput}
        onChangeText={props.onChangeHandler}
        placeholderTextColor='white'
      />
      <View style={styles.senter}>
      <Pressable  onPress={submitHandler} android_ripple={{color:"#0000ff"}}>
        <Text style={styles.button} >
            Submit Now
        </Text>
        </Pressable>
        <Pressable  onPress={Close} android_ripple={{color:"red"}}>
        <Text style={styles.buttonred} >
            Close Now
        </Text>
        </Pressable>
        </View>
    </View>
    </Modal>
  </View>
 
  )
}
const styles = StyleSheet.create({
    container: {
      padding: 0,
      flex: 1,
      
    },
    TextInput: {
  
      marginBottom: 10,
      width: "80%",
      padding: 8,
      marginRight: 10,
      borderWidth:2,
      borderColor:"#000099",
      borderRadius:10,
      color:"white",
     
    },
    TextView: {
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      backgroundColor:"#000066",
      color:"white",
    },
    list: {
      flex: 5,
      paddingTop: 10,
    },
    button:{
        padding:10,
        backgroundColor:"#0000cc",
        color:"white",
        borderRadius:10,
        marginTop:10,
        textAlign:"center",
        fontSize:16, 
        width:"100%",   
    },
    buttonred:{
        padding:10,
        backgroundColor:"red",
        color:"white",
        borderRadius:10,
        marginTop:10,
        textAlign:"center",
        fontSize:16, 
        width:"100%",   
    },
    senter:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:"100%",
        marginTop:10,
    }
  });
export default Home
