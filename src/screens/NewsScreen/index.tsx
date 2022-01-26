import React,{useEffect,useRef} from "react";
import { Text,View,TouchableOpacity } from "react-native";
import { styles } from "./style";
import useCustomNav  from '@/hook/HeaderNav';
import {Search} from "@/components/searchBar";

const NewsScreen = (props:any)=>{

  const CustomNav = useCustomNav();

  CustomNav.setbar({headerTitle:()=>{
    return <Search placeHold="搜索热点新闻" link="SearchScreen" containerStyle={styles.search}/>
  }});

  return (<View style={styles.container}>
             <Text>新闻页面</Text>
          </View> 
           
  )}

export default NewsScreen;