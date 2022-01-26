

import React, { useState, useEffect } from "react";
import { View, TextInput, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Icon } from '@ant-design/react-native';
import commonStyle from '../../style/common'
import {goBack } from '../../utils/common'
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
type propstype = {
    placeHolder?: string,   //提示文字
    value?: string,     // input 的值
    onChange?: Function,    //文字输入时的回调
    onCancel?:Function,     //取消的时的回调，默认取消条回上一页
    goSearch?:Function,     //搜索时的回调
    clearText?:Function     //清除文字的回调
    customeStyle?:any     //自定义样式
}
export const SearchInput = (props: propstype) => {
    const { placeHolder = '请输入搜索文本', value = '', onChange = () => { },goSearch=()=>{},onCancel,clearText=()=>{},customeStyle = {}} = props
    const dispatch = useDispatch()
    useEffect(() => {
    }, [])
    const change = (text: string) => {
        onChange(text)
    }
    const cancel = ()=>{
        onCancel?onCancel():goBack()
    }
    const search = ()=>{
        goSearch()
    }
    const clear=()=>{
        onChange('')
        clearText()
    }

    return (
        <View style={[styles.container,commonStyle.flexCenter,customeStyle.container]}>
            <View style={[commonStyle.flexLeftCenter,styles.warp,customeStyle.warp]}>
                <View style={[styles.icon]}><Icon name="search" /></View>  
                <TextInput value={value} placeholder={placeHolder} style={[styles.textInput,customeStyle.textInput]} onChangeText={text => change(text)} />
                {
                    value? <TouchableOpacity onPress={()=>{clear()}}><Icon style={[styles.closeBtn]} name="close-circle"></Icon></TouchableOpacity>:null
                }
                
            </View>
            {
                value?
            <TouchableOpacity onPress={()=>{search()}}><Text style={[styles.cancel]}>搜索</Text></TouchableOpacity>:
            <TouchableOpacity onPress={()=>{cancel()}}><Text style={[styles.cancel]}>取消</Text></TouchableOpacity>
        }
            
        </View>
    )
}