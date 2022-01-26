import React,{useEffect,useState} from "react";
import {FlatList,RefreshControl,StyleSheet} from "react-native";
import BottomLoading from "@/components/BottomLoading";
import ContentLoading from "@/components/ContentLoading";

interface PagedataType {
  list:any[], // 列表数据
  page_no:number,  // 当前页
  total_page:number // 总页码
}

interface defaultProps{
   Item:(item:any) => JSX.Element,
   styles?:any,
   botload_height?:number,
   page_data:PagedataType,
   reqData:Function // 请求方法
}

const List = (props:defaultProps) =>{

   const { Item:Ele,styles,botload_height,page_data,reqData } = props;

   const [refreshing,setRefreshing] = useState(false);

   useEffect(()=>{
      reqData(1);
   },[])

   if(page_data == null){
      return <ContentLoading/>;
   }

   const { list,page_no,total_page } = page_data;

   /**
    * 滑动到底部
    */   
   const onEndReached = ()=>{
     page_no < total_page && reqData(page_no+1);
   }

   /**
    * 上拉刷新
    */
   const onRefresh = async ()=>{
      setRefreshing(true);
      reqData(1);
      setRefreshing(false);
   }

   return  <FlatList
               style={styles?styles:null}
               data={list}
               onEndReached={onEndReached}
               onRefresh={onRefresh}
               refreshing={refreshing}
               refreshControl={
                  <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  />
               }
               renderItem={({ item }) => {
                  return <Ele item={item}/>  
               }}
               ListFooterComponent={page_no < total_page ?<BottomLoading botload_height={botload_height}/>:null}
             >
            </FlatList>
}


export default List;