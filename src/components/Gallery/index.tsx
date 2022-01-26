import React from "react";
import { View,StyleSheet,TouchableWithoutFeedback } from "react-native";
import ImgGallery from 'react-native-image-gallery';
import { Icon, List } from '@ant-design/react-native';


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    position:"absolute",
    zIndex:100,
    width:'100%',
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  close:{
    position:"absolute",
    zIndex:101,
    left:30,
    top:10
  }
});

interface defaultProps {
  list:string[], // 图片url
  index:number,
  close:Function
}

const Gallery = (props:defaultProps)=>{

  const { list,index } = props;
  
  const close  = ()=>{
    props.close();
  }

  return (
    <View style={styles.centeredView}>
          <View style={styles.close}>
            <TouchableWithoutFeedback onPress={close}>
              <Icon name="close" />
            </TouchableWithoutFeedback>
          </View>
          <ImgGallery
          style={{ flex: 1, backgroundColor: 'black' }}
          initialPage={index}
          images={
            list.map((item)=>{
              return { source: { uri: item } };  
            })
           }
          />
    </View>  
  )
}


export default Gallery;