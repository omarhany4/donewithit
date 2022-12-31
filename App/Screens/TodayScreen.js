import { Text, View, ImageBackground, Image,} from 'react-native';
import styles from './Styles';
import { Card, Searchbar } from 'react-native-paper'
import React , {useState} from 'react';

export default function TodayScreen({navigation}) {
  const [text,setText] = useState('type something')
  function handleChange (text){
    setText(text.target.value)
  }
  return (
    <View >
      <ImageBackground source={require("./back.jpg")} resizeMode="cover" style={styles.imgBack}>
      <Text style={{fontSize:30,margin:"5%",alignSelf:'center',flexWrap:'wrap'}}>Good Morning                           Omar.</Text>
      <Searchbar placeholder="Search" style={{marginHorizontal:20,borderRadius:25}} onChange={handleChange} />
      <View style={styles.searchContainer}>
        <Text>Diet Recommendations</Text>
        <Text>Kegel Excercises</Text>
        <Text>Meditation</Text>
        <Text>Yoga</Text>
      </View>
      <View style={{flexWrap:'wrap',justifyContent:'center',flexDirection:'row',alignContent:'center'}}>
      <Card style={styles.card} onPress={()=> navigation.navigate('All Excercises',{name:'All Excercises'})}>
        <Image source={require("./Dr.jpg") } style={styles.img}/>
        <Card.Title title="Diet Recommendations" style={styles.cardText} />
      </Card>
      <Card style={styles.card} onPress={()=> navigation.navigate('All Excercises',{name:'All Excercises'})}>
        <Image source={require("./Kegel.png") } style={styles.img}/>
        <Card.Title title="Kegel Excercises" style={styles.cardText} />
      </Card>
      <Card style={styles.card} onPress={()=> navigation.navigate('All Excercises',{name:'All Excercises'})}>
        <Image source={require("./Meditation.jpg") } style={styles.img}/>
        <Card.Title title="Meditation" style={styles.cardText}/>
      </Card>
      <Card style={styles.card} onPress={()=> navigation.navigate('All Excercises',{name:'All Excercises'})}>
        <Image source={require("./Yoga.jpg") } style={styles.img}/>
        <Card.Title title="Yoga" style={styles.cardText}/>
      </Card>
      
      </View>
      </ImageBackground>
    </View>
  );
}
