import React,{useEffect} from "react";
import { useNavigation } from '@react-navigation/native';
import { View,Text } from "react-native";
import useCustomNav from '../../hook/HeaderNav/index'

const MyScreen = ()=>{
    const navigation = useNavigation();
    const custonNav = useCustomNav()
    const headerRight = ()=>{
      return <View><Text>wode→</Text></View>
    }
    const headerLeft = ()=>{
      return <View><Text>wode←</Text></View>
    }
  custonNav.setbar({
    headerRight,headerLeft
})
  return <Text>我的</Text>

}

export default MyScreen;