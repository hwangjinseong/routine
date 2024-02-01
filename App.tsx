import React from 'react';
import {PortalHost, PortalProvider} from '@gorhom/portal';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './Navigation';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <PortalProvider>
          <Navigation />
          <PortalHost name="select.modal" />
        </PortalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
