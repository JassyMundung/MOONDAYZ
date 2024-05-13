import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import React, { useEffect } from 'react';
import SimpButton from '../../assets/icon/SimpButton.svg';
import ArtButton from '../../assets/icon/ArtButton.svg';
import CalButton from '../../assets/icon/CalButton.svg';
import A5 from '../../assets/icon/art5.svg';
import A6 from '../../assets/icon/art6.svg';
import A7 from '../../assets/icon/art7.svg';
import A2 from '../../assets/icon/art2.svg';
import A3 from '../../assets/icon/art3.svg';
import A4 from '../../assets/icon/art4.svg';



const Artt = ({ navigation }) => {
  const { height } = useWindowDimensions();

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
      <Text style={styles.text}>FEMALE</Text>
        </TouchableOpacity>
    <View style={styles.Artcontainer}>
        <A2 />
        <A3 />
    </View>
    <View style={styles.Arttcontainer}>
        <A4 />
        <A5 />
    </View>
    <View style={styles.Artttcontainer}>
        <A6 />
        <A7 />
    </View>
    <View style={[styles.buttonContainer, { marginTop: 28 }]}>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Female')}>
        <CalButton />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Simp')}>
        <SimpButton />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Art')}>
        <ArtButton />
      </TouchableOpacity>
    </View>
  </View>
  );
};

export default Artt;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BA55D3',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-MediumItalic',
    fontWeight: 'bold',
    color: '#FFFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 100,
  },
  calContainer: {
    width: '100%',
    paddingHorizontal: 45,
    marginTop: 90,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  Artcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  Arttcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 50,
  },
  Artttcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 60,
  },
});
