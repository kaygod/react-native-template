import React from "react";
import { View,Text } from "react-native";

import useCustonNav from '../../hook/HeaderNav'

const LoginScreen = ()=>{
  const custonNav = useCustonNav()
  const headerRight = ()=>{
    return (
     <View><Text>abcd</Text></View>
    )
  }
 custonNav.setbar({headerRight})
 return <Text>登录页</Text>

}

export default LoginScreen;