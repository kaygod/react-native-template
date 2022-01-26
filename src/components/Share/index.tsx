import React from 'react';
import { Text, View,Image } from "react-native";
import { styles } from './style';
import { Button } from '@ant-design/react-native';

interface defaultProps{
  close:()=>void
}


export default function Share(props:defaultProps) {

  const { close } = props;

  const list = [
    {
      title:"QQ好友",
      source:require("../../images/qqshare.png")
    },
    {
      title:"微信好友",
      source:require("../../images/wxshare.png")
    },
    {
      title:"朋友圈",
      source:require("../../images/pyqshare.png")
    },
    {
      title:"新浪微博",
      source:require("../../images/wbshare.png")
    },

  ]

  return (
    <View style={styles.container}>
        <View style={styles.content}>
              <View style={styles.head}>
                <Text style={styles.headText}>分享到</Text>
              </View>
              <View style={styles.line}>
                {
                  list.map((item)=>{
                    return (
                      <View key={item.title}>
                          <Image 
                          style={styles.icon}
                          source={item.source}/>
                          <View style={styles.title}>
                            <Text>{item.title}</Text>
                          </View>
                     </View>
                    )
                  })
                }
              </View>
              <View style={styles.cancel}>
                 <Button style={styles.btn} onPress={()=>{close()}}>取消</Button>
              </View>
        </View>   
    </View>
  )
}
