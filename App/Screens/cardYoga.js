import { StyleSheet, Text, View, ImageBackground,TouchableOpacity, Button, SafeAreaView, Alert } from 'react-native';
import styles from './Styles';
import { Card } from 'react-native-paper';
export default function CardYoga() {
  return (
    <View >
      <TouchableOpacity>
        <Card style={{backgroundColor:'red',margin:20,}}>
        <Card.Title title="Yoga" subtitle="Card Subtitle"  style={styles.card}/>
        </Card>
      </TouchableOpacity>
    </View>

  );
}