import React from 'react'
import { View,Text } from 'react-native'
const List = (props) => {
  return (
    <View style={{fontSize:20,padding:10,backgroundColor:"#5e0acc",borderRadius:10,marginTop:10}}>
<Text style={{color:"white"}}>{props.value}</Text>
    </View>
  )
}

export default List
