import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import React from 'react'
import { 
    SafeAreaView,
    Text,
    TextInput, 
    View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from './styles'


const ErrorMessage = ({ errorValue}) => {
    return errorValue ? (
        <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorValue}</Text>
        </View>
    ): null;
};

export default function RegisterForm() {
    function onSubmitHandler(values){
        console.log(values);
    }

  return (
   <>
    <SafeAreaView style={styles.topSafeArea} />

    <StatusBar style="light" />

    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>Register</Text>
        </View>

        <Formik
        initialValues={{
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:"",
        }}
        onSubmit={(values, actions) =>{
            onSubmitHandler(values, actions)
        }}
        validationSchema={validationSchema}
        >
        {({
            handleChange,
            values,
            errors,
            handleSubmit,
            handleBlur,
        }) =>(
            <KeyboardAwareScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}
            >
            <View style={styles.formGroup}>
                <Text style={styles.label}>First Name</Text>

                <TextInput 
                    style={styles.input}
                    value={values.firstName}
                    onChangeText={handleChange(firstName)}
                    onBlur={handleBlur("firstName")}
                />

                <ErrorMessage
                errorValue={touched.firstName && errors.firstName} />
            </View>

            </KeyboardAwareScrollView>
        )}
         
        </Formik>


    </SafeAreaView>
   </>
  )
}
