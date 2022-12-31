import { StyleSheet, Text, View, ImageBackground,Image, Button, SafeAreaView, Alert } from 'react-native';
import styles from './Styles';
import { Card } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import AllExcercisesScreen from './AllExcercisesScreen';


export default function CardDietRecommendation({navigation}) {
  return (
  <View >
      <Card style={styles.card} >
        <Card.Title title="Diet Recommendations" style={styles.cardText} />
      </Card>
  </View>
  );
}


