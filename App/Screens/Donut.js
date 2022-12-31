import { StyleSheet, Text, View, ImageBackground,TouchableOpacity, Button, SafeAreaView, Alert } from 'react-native';
import styles from './Styles';
import Svg,{G, Circle} from 'react-native-svg';

export default function Donut(
    {
        precentage = 75,
        raduis=40,
        strokewidth=10,
        duration = 500,
        color ="tomato",
        delay=0,
        max = 100

    }
) {
    const halfCircle =  raduis + strokewidth
  return (

    <SafeAreaView >
        <Svg width={raduis*2} height ={raduis*2} viewBox={`0 0 ${halfCircle*2} ${halfCircle*2}`}>
            <G>
                <Circle cx="50%" cy="50%" stroke={color} strokeWidth = {strokewidth} strokeOpacity ={0.2} r = {raduis}/>
                <Circle cx="50%" cy="50%" stroke={color} strokeWidth = {strokewidth} strokeOpacity ={0.2} r = {raduis}/>
            </G>
        </Svg>
    </SafeAreaView>

  );
}
