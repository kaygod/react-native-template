import { StyleSheet } from "react-native";
import {dp } from "../../utils/common";


export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff"
  },
  pad:{
    width:"auto",
    alignItems:"center"
  },
  textStyle:{
    color:"#000"
  },
  activeText:{
    color:"rgb(172,172,172)"
  },
  search:{
    marginTop:dp(10),
    marginBottom:dp(12),
    marginLeft:dp(0)
  }
})
