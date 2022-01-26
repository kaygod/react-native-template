import AsyncStorage from '@react-native-async-storage/async-storage';


export const setItem = async (key:string,value:string | Object)=>{
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.log(e);
  }
}


export const getItem = async (key:string)=>{
  let result = null;
  try {
    result = await AsyncStorage.getItem(key);
    if(result != null){
      result = JSON.parse(result);
    }
  } catch (e) {
    console.log(e);
  }
  return result;
}


export const removeItem = async (key:string)=>{
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.log(e);
  }
}