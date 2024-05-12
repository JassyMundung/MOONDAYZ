import { StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import Cal from '../../assets/icon/Cal.svg';

const Female = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FEMALE</Text>
      <Cal/>
    </View>
  );
};

export default Female;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BA55D3',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingTop: 20, 
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold', 
    color: '#FFFF',
  },
}); 
