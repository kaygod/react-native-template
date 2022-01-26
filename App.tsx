import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Text
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Route from "./src/route/index";
import { Provider as AntdProvider } from '@ant-design/react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';
import Modal from "./src/components/Modal";

const App = () => {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <View style={{flex: 1}}>
        <Modal>
          <Provider store={store}>
            <AntdProvider>
              <StatusBar/>
              <Route/>
            </AntdProvider>
          </Provider> 
        </Modal>
      </View>
  );
};



export default App;
