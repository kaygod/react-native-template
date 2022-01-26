import React,{useState,useRef} from 'react'
import { Icon, TabBar } from '@ant-design/react-native';
import  useCustomNav  from '../../hook/HeaderNav';
import ProductScreen from '../ProductScreen';
import NewsScreen from '../NewsScreen';
import HostingScreen from '../HostingScreen';
import MyScreen from '../MyScreen';

 const HomeScreen=()=> {
  const CustomNav = useCustomNav()

  const [tab_name,updateTab] = useState("News");
  const swichBar = (name:string,title:string)=>{
    CustomNav.setbar(title)
    updateTab(name)
  }
  return (
    <TabBar
    unselectedTintColor="#949494"
    tintColor="#33A3F4"
    barTintColor="#f5f5f5"
  >
      <TabBar.Item
        title="资讯"
        icon={<Icon name="home" />}
        selected={tab_name === 'News'}
        onPress={() => {swichBar("News",'资讯')}}
      >
        <NewsScreen/>
      </TabBar.Item>
      <TabBar.Item
        icon={<Icon name="ordered-list" />}
        title="产品"
        badge={2}
        selected={tab_name === 'Product'}
        onPress={() => {swichBar("Product",'产品')}}
      >
          <ProductScreen/>
      </TabBar.Item>
      <TabBar.Item
        icon={<Icon name="like" />}
        title="托管"
        selected={tab_name === 'Hosting'}
        onPress={() => swichBar("Hosting",'托管')}
      >
      <HostingScreen/>
      </TabBar.Item>
      <TabBar.Item
        icon={<Icon name="user" />}
        title="我的"
        selected={tab_name === 'My'}
        onPress={() => swichBar("My",'我的')}
      >
        <MyScreen/>
      </TabBar.Item>
   </TabBar>
  )
}
export default HomeScreen
