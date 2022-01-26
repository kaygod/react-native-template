import React from 'react'
import { View, Text, TouchableOpacity, StyleProp, StyleSheet } from 'react-native'
import { Icon } from '@ant-design/react-native'
import { navigate } from '../../utils/common'
import { styles } from './style.js'
type propsType = {
    placeHold: string, // 文字placehold
    link: string | Function,    // 点击跳转的链接
    containerStyle?:any //外层样式 
}
export const Search = (props: propsType) => {
    const { placeHold, link } = props
    const navigateTo = () => {
      
    }
    return (
        <TouchableOpacity onPress={()=>{navigateTo()}}>
            <View style={[styles.warp,props.containerStyle?props.containerStyle:null]}>
                <View style={{flexDirection:'row'}}>
                <Icon style={[styles.icon]} name="search" />
                    <Text style={[styles.holdText]}>{placeHold}</Text></View>
            </View>
        </TouchableOpacity>

    )
}