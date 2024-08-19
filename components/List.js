import React from 'react'
import { View,Text,Pressable } from 'react-native'
const List = (props) => {
  const remove = ()=>{
    props.removeHandler(props.goalid);
  }
  return (
    <View style={{fontSize:20,backgroundColor:"#000099",borderRadius:10,marginTop:10}} >
<Pressable  android_ripple={{color:"#0000ff"}} onPress={remove}>
<Text style={{color:"white",fontSize:18,padding:16}}>{props.value}</Text>
</Pressable>
    </View>
  )
}

export default List
