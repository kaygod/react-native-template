import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'

type listType = {
    name: string //列表标题
}

type propsType = {
    list: listType[],
    activeIndex?: string | number, //当前选中索引
    callBack?:Function  //选中后的回调
}
export const Classifier = (props: propsType) => {
    const { list, activeIndex = 0,callBack=()=>{}} = props
    const [active, setactive] = useState(activeIndex)
    const changeIndex = (index: number) => {
        setactive(index)
        callBack(list[index])
    }
    return (
        <View style={[styles.container]}>
            <View style={[styles.warp]}>
                {
                    list.map((val, index: number) => {
                        return (
                            <View key={index} style={[styles.item,active == index && styles.active]}>
                                <TouchableOpacity  style={[styles.touchItem]} onPress={() => { changeIndex(index) }}>
                                    <View key={index} >
                                        <Text style={[styles.text,active == index && styles.activeText]}>{val.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>

        </View>
    )
}