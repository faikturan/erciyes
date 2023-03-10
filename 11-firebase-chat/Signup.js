import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from './firebase';
import { StyleSheet, View, Button, TextInput, Text} from "react-native";


export default function Signup({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onHandleSignup = () => {
        if(email !== '' && password !== ''){
            createUserWithEmailAndPassword(auth, email, password)
            .then(()=> console.log('Signup success'))
            .catch(err => console.log(`Login err: ${err}`));
        }
    };


  return (
    <View style={styles.container}>
        <Text style={styles.title}>Create new account</Text>
        <TextInput
        style={styles.input}
        placeholder='Enter email'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAdress'
        value={email}
        onChangeText={text => setEmail(text)}>
        </TextInput>

        <TextInput
        style={styles.input}
        placeholder='Enter password'
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
        textContentType='password'
        value={password}
        onChangeText={text => setPassword(text)}>
        </TextInput>

        <Button onPress={onHandleSignup} color='#f57c00' title='Signup'>
        <Button onPress={()=> navigation.navigate('Login')}
            title='Go to Login'></Button>
        </Button>
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    title:{
        fontSize: 24,
        fontWeight: '600',
        color: '#444',
        alignSelf: 'center',
        paddingBottom: 24,
    },
    input:{
        backgroundColor: '#fff',
        marginBottom: 20,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 8,
        padding: 12,
    }
});
