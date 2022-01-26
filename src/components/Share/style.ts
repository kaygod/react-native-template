import { dp } from "@/utils/common";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    position:"absolute",
    zIndex:100,
    width:'100%',
    height:'100%',
    backgroundColor:"rgba(0,0,0,.5)"
  },
  content:{
    position:"absolute",
    width:"100%",
    bottom:0,
    height:dp(175),
    backgroundColor:"#fff"
  },
  icon:{
    width:dp(48),
    height:dp(48)
  },
  title:{
    marginTop:dp(8),
    color:'rgb(79,79,79)',
    fontSize:dp(14)
  },
  line:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingTop:dp(10),
    paddingLeft:dp(22),
    paddingRight:dp(22)
  },
  cancel:{
    marginTop:dp(14)
  },
  btn:{
    backgroundColor:"rgb(243,243,243)",
    color:"rgb(135,135,135)"
  },
  head:{
    height:dp(35),
    width:"100%",
    paddingLeft:dp(12),
    justifyContent:"center",
    backgroundColor:"rgb(243,243,243)",
    opacity:1
  },
  headText:{
    fontSize:dp(15),
    color:"rgb(122,122,122)"
  }
})