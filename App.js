import { StyleSheet, Text, View } from 'react-native';
import BmiCalculator from './Index';
export default function App() {
 return (
 <View style={styles.container}>
 <BmiCalculator/>
 </View>
 );
}
const styles = StyleSheet.create({
 container: {
 flex: 1,
 },
});