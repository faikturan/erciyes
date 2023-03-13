import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useState, useContext} from 'react'
import { ActivityIndicator, View } from 'react-native';
import Chat from './Chat';
import { auth } from './firebase';
import Login from './Login';
import Signup from './Signup';


const Stack = createStackNavigator();

function ChatStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Chat' component={Chat} />
        </Stack.Navigator>
    );
}


function AuthStack(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
        </Stack.Navigator>
    );
}

const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return(
        <AuthenticatedUserContext.Provider value={{user, setUser}}>
            {children}
        </AuthenticatedUserContext.Provider>
    );
};

function RootNavigator(){
    const [user, setUser] = useContext(AuthenticatedUserContext);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        // onAuthStateChanged returns an unsubscriber
        const unsubscribeAuth = onAuthStateChanged(
            auth,
            async authenticatedUser => {
                authenticatedUser ? setUser(authenticatedUser) : setUser(null);
                setIsLoading(false);
            }
            );

         //unsubscribe auth listener on unmount  
        return unsubscribeAuth;
}, [user]);

    if(isLoading){
        return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size='large' />
        </View>
    );
}

    return(
        <NavigationContainer>
           {user ? <ChatStack /> : <AuthStack />}
        </NavigationContainer>
    );
}


export default function ChatApp() {
  return (
    <AuthenticatedUserProvider>
        <RootNavigator />
    </AuthenticatedUserProvider>
  );
}
