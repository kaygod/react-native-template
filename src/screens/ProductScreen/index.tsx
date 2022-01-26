import React, { useState,useEffect } from "react";
import { View, Text, Image, ScrollView,TouchableOpacity } from "react-native";
import { Search } from "@/components/searchBar";
import styles from "./style";
import useCustomNav from '@/hook/HeaderNav'
const ProductScreen = () => {
  
  const customNav = useCustomNav()
  customNav.setbar({headerTitle:()=>{return <Search placeHold='搜索产品型号/品牌' link="BrandSearch" />}})

  return (
    <View style={[styles.container,{flex:1}]}>      
        <Text>产品页面</Text>
    </View>
  )
}

export default ProductScreen;