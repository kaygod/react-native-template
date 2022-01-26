import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React, { useRef,useEffect } from "react";
const useCustomNav = () => {
    const navigation = useNavigation();
    const bool = useRef<any>(0)
    const newProps = useRef<any>({})
    React.useLayoutEffect(() => {
        console.log(bool.current)
        console.log(newProps.current)
        navigation.setOptions({
            ...newProps.current,
        });
        return ()=>{
            clear(newProps.current)
        }
    }, [bool.current]);

    const setbar = (props: NativeStackNavigationOptions | string) => {
        bool.current = bool.current+1
        if (typeof props === 'string') {
            newProps.current['title'] = props
        } else {
            newProps.current = props
        }
    };
    const clear = (props:NativeStackNavigationOptions | string)=>{
        const clearHeader:any = {}
        if(typeof props =='string' ){
            clearHeader['title'] = undefined
        }else{
            for(let i in props){
                clearHeader[i] = undefined
            }
        }
        navigation.setOptions(clearHeader);
    }
    return { setbar, clear};
}
export default useCustomNav