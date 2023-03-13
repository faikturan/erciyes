import { signInWithCredential } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from './firebase';
import { StyleSheet, View, Text, TextInput, Button} from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleLogin = () => {
    if(email !== '' && password !== ''){
      signInWithCredential(auth, email, password)
      .then(() => console.log('Login success'))
      .catch(err => console.log(`Login err: ${err}`));
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Welcome back!</Text>
      <TextInput style={styles.input}
      placeholder='Enter email'
      autoCapitalize='none'
      keyboardType='email-address'
      textContentType='emailAddress'
      autoFocus={true}
      value={email}
      onChangeText={text => setEmail(text)} />

    <TextInput style={styles.input}
      placeholder='Enter password'
      autoCapitalize='none'
      secureTextEntry={true}
      autoCorrect={false}
      textContentType='password'
      value={password}
      onChangeText={text => setPassword(text)} />

    <Button onPress={onHandleLogin} color='#f57c00' title='Login' />
    <Button
    onPress={()=> navigation.navigate('Signup')}
    title='Go to SignUp' />
    </View>
  )
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
