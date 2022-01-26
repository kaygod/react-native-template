import { NavigationContainerRef,useNavigation} from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { msgCode,assembleParams } from "./error_code";
import { Toast,Modal } from '@ant-design/react-native';
import React,{ReactElement, useContext} from "react";
import { ModalContext } from "../components/Modal";
import Loading from "../components/Loading";
import Gallery from '../components/Gallery';
import { Dimensions } from "react-native";
import store from '@/store/store'
export const navigation_ref = React.createRef<NavigationContainerRef<ReactNavigation.RootParamList>>();

export const navigate = (name:string,params = {})=>{
  const new_name = name as never;
  const new_params = params as never;
  navigation_ref.current && navigation_ref.current.navigate(new_name,new_params);
}
export const setBar = (props:NativeStackNavigationOptions|string)=>{
    const navigation = useNavigation()
    if(typeof props==='string'){
      React.useLayoutEffect(() => {
        navigation.setOptions({
          title:props,
        });
      }, [navigation]);
    }else{
    React.useLayoutEffect(() => {
      navigation.setOptions({
        ...props,
      });
    }, [navigation]);
    }
  
}
export const goBack = ()=>{
  navigation_ref.current && navigation_ref.current.goBack();
}

//提示框
export const showToast = (content:string,duration = 2)=>{
  Toast.info(content, duration); // 默认2秒消失
}

interface actionsType {
  text:string,
  onPress:Function,
  style?:string
}

//确认框
export const confirm = (options:{title?:string,message:string,callback:Function,actions?:actionsType[]})=>{
    
    let action_params = options.actions;

    if(action_params == null){
      action_params = [
        {
           text:"确定",
           onPress(){
               options.callback && options.callback(); // 执行确认的回调函数
               return false;
           }
        },
        {
          text:"取消",
          onPress(){
              return false;
          }
        }
      ]
    }

    const alert = Modal.alert as any;

    const Alert = alert(options.title?options.title:"提示",options.message,action_params) as any;

    return Alert;

}

export const service_ip = "https://www.xxx.com"; //接口地址

/**
 * 请求接口
 */
export const request = (options:{url:string,data?:any},need_loading = true)=>{
  
    const loading = need_loading ? Toast.loading({content:'加载中',duration:0}):null;
    
    const params = assembleParams({ 
       data:options.data?options.data:{} 
    })

    return new Promise((resolve,reject)=>{
      fetch(`${service_ip}${options.url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:params
      })
      .then((response) => response.json())
      .then((response) => {
        loading && Toast.remove(loading)
        if(response.result == 1){
          resolve(response.data);
        }else{
          if (response.errno == 1060) { //登出
            navigate("Login");
            loginOut();
          } else if (response.errno == 800) {
            reject(800);
            return false;
          }
          const title = msgCode(response.errno);
          showToast(title);
        }
      })
      .catch((error) => {
        loading && Toast.remove(loading)
        console.log('error Link',options.url)
        console.log('error params',JSON.parse(params))
        console.log("error:",error);
        showToast("网络请求错误,请联系管理员!");
        reject(error);
      })

    })

}

/**
 * 获取登录信息
 */
export const getUserInfo = ()=>{
  return {
    user_id:0,
    login_flag:123
  }
}

/**
 * 新建Modal
 */
export const useModal = ()=>{
  const modalContext = useContext(ModalContext);
  const setModal = (Ele:Function | null,props?:any)=>{
    modalContext?.setModal(Ele,props);
  }
  return setModal;
}

/**
 * 显示加载中
 */
export const useLoading = ()=>{

  const setModal = useModal();

  const showLoading = ()=>{
      setModal(Loading);
  }

  const hideLoading = ()=>{
      setModal(null)
  }

  return [showLoading,hideLoading];

}

/**
 * 显示图片画廊
 */
export const useGallery = ()=>{

  const setModal = useModal();

  const showGallery = (list:string[],index = 0)=>{
      setModal(Gallery,{
        close:hideGallery,
        list,
        index
      });
  }

  const hideGallery = ()=>{
      setModal(null)
  }

  return [showGallery,hideGallery];

}

export const contrastHas = (item:any)=>{
  const storeData = store.getState()
  const {Global:{ContrastList}} = storeData
  if(!ContrastList.length){
    console.log(false)
    return false
  }else{
    const bool = ContrastList.some((val:any)=>{
      return val.product_type===item.product_type&&val.product_id===item.product_id
    })
    console.log(bool)
    return bool
  }
}
export const infoAllSame = (obj:any,layer:number)=>{
  layer -= 1;
  for (var i = 0; i < layer; i++) {
    if (obj["value_" + i] != obj["value_" + (i + 1)]) {
      return false;
    }
  }
  return true;
} 
const loginOut = ()=>{}


// 设备宽度，单位 dp
const deviceWidthDp = Dimensions.get('window').width;
 
// 设计稿宽度（这里为375px），单位 px
const uiWidthPx = 375;

export const dp = (uiElePx:number)=>{
  return uiElePx * deviceWidthDp / uiWidthPx;
}