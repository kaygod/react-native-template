import React from "react";
import { View,StyleSheet } from "react-native";
import {
  ActivityIndicator
} from '@ant-design/react-native';
import { dp } from "@/utils/common";

const BottomLoading = (props:{botload_height?:number})=>{
  return (
     <View style={[styles.container,{height:props.botload_height?dp(props.botload_height):dp(50)}]}>
        <View style={[styles.loading]}>
          <ActivityIndicator/>
        </View>
     </View>
  )
}


const styles = StyleSheet.create({
  container:{
    width:'100%'
  },
  loading: {
    height:"100%",
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default BottomLoading;