import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getRoutes } from "./config";
import { navigation_ref } from "../utils/common";
const Stack = createNativeStackNavigator();

const routes = getRoutes() as ({
  component: () => JSX.Element;
  name: string;
  options: {
      title: string;
  };
})[];

const Route = ()=>{
  return (
    <NavigationContainer ref={navigation_ref}>
          <Stack.Navigator initialRouteName="Home" screenOptions={{
           headerTitleAlign:'center'
          }}>
            {
              routes.map((route)=>{
                return (
                  <Stack.Screen
                  key={route.name}
                  name={route.name}
                  component={route.component}
                  options={{title:route.options.title}}
                />
                )
              })
            }
          </Stack.Navigator>
    </NavigationContainer>
  )
}



export default Route;