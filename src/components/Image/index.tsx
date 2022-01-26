import React from 'react'
import { ImageBackground,Image as NativeImage } from "react-native";

interface defaultProps {
  style:any,
  uri:string
}

export default function Image(props:defaultProps) {

  const { style,uri } = props;

  return (
    <ImageBackground
                    style={{...style}}
                    source={require("../../images/lazyload.jpg")}
                    >
                      <NativeImage
                        style={{...style}}
                        source={{
                          uri
                        }}
                      />          
    </ImageBackground>  
  )
}
