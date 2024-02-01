import React from 'react';
import {PortalHost, PortalProvider} from '@gorhom/portal';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './Navigation';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <PortalProvider>
          <Navigation />
          <PortalHost name="select.modal" />
        </PortalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
