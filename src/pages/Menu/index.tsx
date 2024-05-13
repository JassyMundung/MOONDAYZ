import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';

const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose Your Gender</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Female')}>
          <Text style={styles.buttonText}>FEMALE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Male')}>
          <Text style={styles.buttonText}>MALE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BA55D3',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold', 
    color: '#000000', 
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FFFFFF', 
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginVertical: 10, 
    alignItems: 'center', 
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold', 
    color: '#000000', 
    fontFamily: 'Poppins-Medium',
  },
});