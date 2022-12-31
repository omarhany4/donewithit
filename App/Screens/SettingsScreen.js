import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,TouchableOpacity, Button, SafeAreaView, Alert } from 'react-native';
import styles from './Styles';
import React, { useState, useEffect } from 'react';
import { TextInput } from 'react-native-paper';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut} from "firebase/auth"
import { authentication } from './firebase';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';


export default function SettingsScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    createUserWithEmailAndPassword(authentication, email, password)
    .then((userCredential)=>{
      const user = userCredential.user
      alert("Successfully Signed Up")
    })
    .catch((error)=>{
    console.log(error)
    }
    )
  }

  function handleSignIn() {
    signInWithEmailAndPassword(authentication, email, password)
    .then((userCredential)=>{
      const user = userCredential.user
      alert("Successfully Signed In")
    })
    .catch((error)=>{
    console.log(error)
    }
    )
  }

  function handleSignOut() {
    signOut(authentication)
    .then(()=>{alert("Successfully Signed Out")})
    .catch((error)=>{console.log(error)})}
    
    async function onFacebookButtonPress() {
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
    
      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();
    
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }
    
      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    
      // Sign-in the user with the credential
      return auth().signInWithCredential(facebookCredential);
    }
  return (
    <View>
      <ImageBackground source={require("./back.jpg")} resizeMode="cover" style={styles.imgBack}>
        <Text style={{fontSize:40,fontWeight:'800', alignSelf:'center'}}>Sign In Now</Text>
        <TextInput style={styles.input} placeholder={'UserName'} value={email} onChangeText={(Text)=>{setEmail(Text)}}/>
        <TextInput style={styles.input} placeholder={'Password'} value={password} onChangeText={(Text)=>{setPassword(Text)}}/>
        <Text style={{fontSize:20,marginLeft:"8%",opacity:0.5}}>Forget Password?</Text>
        <Button title='Sign In' style={styles.SignInButton} onPress={handleSignIn}/>
        <Button title='Sign Up' style={styles.SignInButton} onPress={handleSignUp}/>
        <Button title='Sign Out' style={styles.SignInButton} onPress={handleSignOut}/>
        <Button title='FaceBook Sign In' style={styles.SignInButton}  onPress={onFacebookButtonPress}/>
      </ImageBackground>  
    </View>
  )
}
