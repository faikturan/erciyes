import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, StatusBar, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Header} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: 'HOME', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home screen</Text>
        <Button
          title="go profile settings screen"
          onPress={() =>
            navigation.navigate('ProfileStack', {screen: 'ProfileSettings'})
          }
        />
      </View>
    </SafeAreaView>
  );
};

const ProfileScreen = () => (
  <SafeAreaView style={{flex: 1}}>
    <Header
      leftComponent={{icon: 'menu', color: '#fff'}}
      centerComponent={{text: 'PROFILE', style: {color: '#fff'}}}
      rightComponent={{icon: 'home', color: '#fff'}}
    />
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile screen</Text>
    </View>
  </SafeAreaView>
);

const ProfileSettings = () => (
  <SafeAreaView style={{flex: 1}}>
    <Header
      leftComponent={{icon: 'menu', color: '#fff'}}
      centerComponent={{text: 'ProfileSettings', style: {color: '#fff'}}}
      rightComponent={{icon: 'home', color: '#fff'}}
    />
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile Settings screen</Text>
    </View>
  </SafeAreaView>
);

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen name="HomeStack" component={HomeStackNavigator} />
      <Tab.Screen
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Profile');
          },
        })}
        name="ProfileStack"
        component={ProfileStackNavigator}
      />
    </Tab.Navigator>
  );
}
export {MyTabs};
