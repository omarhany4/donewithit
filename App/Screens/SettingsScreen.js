import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,TouchableOpacity, Button, SafeAreaView, Alert } from 'react-native';
import styles from './Styles';
import Card from './cardDietRecommendation';
import { useState } from 'react';
import react from 'react';
import { TextInput } from 'react-native-paper';
import { auth } from './firebase';


export default function SettingsScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp=()=> {
    auth.createUserWithEmailAndPassword(email, password)
    .then(userCredentials =>{
      const user = userCredentials.user
      console.log(user.email)
    })
    .catch(error => alert (error. message))
  }
  return (
    <View>
      <ImageBackground source={require("./back.jpg")} resizeMode="cover" style={styles.imgBack}>
        <Text style={{fontSize:40,fontWeight:'800', alignSelf:'center'}}>Sign In Now</Text>
        <TextInput style={styles.input} placeholder={'UserName'} />
        <TextInput style={styles.input} placeholder={'Password'} />
        <Text style={{fontSize:20,marginLeft:"8%",opacity:0.5}}>Forget Password?</Text>
        <Button title='Sign In' style={styles.SignInButton}/>
        <Button title='Sign Up' style={styles.SignInButton} onPress={()=>{handleSignUp}}/>
      </ImageBackground>  
    </View>
  )
}
