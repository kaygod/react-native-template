import React from "react";
import { View,StyleSheet,Text } from "react-native";
import {
  ActivityIndicator
} from '@ant-design/react-native';
import { dp } from "@/utils/common";

const ContentLoading = ()=>{

  return (
     <View style={styles.container}>
        <View style={[styles.loading]}>
          <View><ActivityIndicator/></View>
          <Text style={styles.text}>加载中...</Text>
        </View>
     </View>
  )

}


const styles = StyleSheet.create({
  container:{
    width:'100%',
    marginTop:dp(200)
  },
  loading: {
    alignItems: 'center'
  },
  text:{
    fontSize:dp(12),
    color:"#333"
  }
});

export default ContentLoading;