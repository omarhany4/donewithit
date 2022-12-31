import { Text, View, ImageBackground, Image, Touchable, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { Button, Card, Searchbar, } from 'react-native-paper';
import { Linking } from 'react-native';
<a href="https://www.youtube.com/"> </a>



export default function AllExcercisesScreen() {
  return (
    <View >
      <ImageBackground source={require("./back.jpg")} resizeMode="cover" style={styles.imgBack}>
        <Text style={{fontSize:30,margin:30}}>Meditation</Text>
        <Text style={{fontSize:15,marginLeft:30,opacity:0.5}}>3-10 MIN Course</Text>
        <Text style={{fontSize:20,margin:'2%',marginLeft:'8%',opacity:0.5}}>Live happier and healthier by learning the fundamentals of meditation and mindfulness</Text>
        <Searchbar placeholder="Search" style={{marginTop:20,marginHorizontal:20,borderRadius:25,width:'50%'}}/>
        <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center',marginTop:30}}>
          <TouchableOpacity style= {styles.videos} onPress={()=>Linking.openURL('https://www.youtube.com/')} >
            <Image source={require("./play.png")} resizeMode="center" style={{width:30 , height:30,}}/>
            <Text style={{marginLeft:20}}>Session 01</Text>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.videos} onPress={()=>Linking.openURL('https://www.youtube.com/')} >
            <Image source={require("./play.png")} resizeMode="center" style={{width:30 , height:30,}}/>
            <Text style={{marginLeft:20}}>Session 02</Text>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.videos} onPress={()=>Linking.openURL('https://www.youtube.com/')} >
            <Image source={require("./play.png")} resizeMode="center" style={{width:30 , height:30,}}/>
            <Text style={{marginLeft:20}}>Session 03</Text>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.videos} onPress={()=>Linking.openURL('https://www.youtube.com/')} >
            <Image source={require("./play.png")} resizeMode="center" style={{width:30 , height:30,}}/>
            <Text style={{marginLeft:20}}>Session 04</Text>
          </TouchableOpacity>
        </View>
        <Text style={{margin:'5%', fontSize:20}}>Meditation advices</Text>
        <View style= {styles.advice}>
          <Image source={require("./Meditation.jpg")} resizeMode="center" style={{width:100 , height:100,borderRadius:15}}></Image>
          <View style={{padding:15}}>
          <Text style={{marginBottom:15 , fontStyle:'italic',fontWeight:'bold'}}>Basic 2</Text>
          <Text>Start your deepen practice</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
