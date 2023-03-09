import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { MyTabs } from './Navigator'

const NavigateApp = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaProvider>
            <NavigationContainer>
                <MyTabs />
            </NavigationContainer>
        </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default NavigateApp