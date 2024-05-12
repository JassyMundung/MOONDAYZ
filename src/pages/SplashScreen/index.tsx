import { StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import Cewek from '../../assets/icon/Cewek.svg';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('Menu'), 50000);
  }, []);
  return (
    <View style={styles.container}>
      <Cewek/>
      <Text style={styles.text}>MOONDAYZ</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BA55D3',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold', 
    color: '#000000', 
  },
});
 