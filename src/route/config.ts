import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";


export const getRoutes = () => {
  return [
    {
      component:HomeScreen,
      name:"Home1",
      options:{
        title:'首页',
      }
    },
   ,{
      component:LoginScreen,
      name:"Login",
      options:{
        title:'登录'
      }
    }
  ]
}