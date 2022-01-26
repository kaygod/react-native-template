import React from "react";
import { View,StyleSheet } from "react-native";
import {
  ActivityIndicator
} from '@ant-design/react-native';

const Loading = ()=>{

  return (
     <View style={styles.container}>
        <View style={[styles.darkBg]}>
          <ActivityIndicator color="#fff" size="large"/>
        </View>
     </View>
  )

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    position:"absolute",
    zIndex:100,
    width:'100%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkBg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
    backgroundColor: '#000',
    opacity:.8
  }
});

export default Loading;