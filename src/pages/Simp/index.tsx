import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions, Image } from 'react-native';
import React, { useEffect } from 'react';
import SimpButton from '../../assets/icon/SimpButton.svg';
import ArtButton from '../../assets/icon/ArtButton.svg';
import CalButton from '../../assets/icon/CalButton.svg';
import C1 from '../../assets/icon/C1.svg';
import C2 from '../../assets/icon/C2.svg';
import C3 from '../../assets/icon/C3.svg';
import C4 from '../../assets/icon/C4.svg';
import C5 from '../../assets/icon/C5.svg';
import C6 from '../../assets/icon/C6.svg';
import C7 from '../../assets/icon/C7.svg';
import C8 from '../../assets/icon/C8.svg';

const Simp = ({ navigation }) => {
  const { height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.text}>FEMALE</Text>
      </TouchableOpacity>
      <Text style={styles.mood}>Your Mood today</Text>
      <View style={styles.simcontainer}>
        <C1 />
        <C2 />
        <C3 />
        <C4 />
      </View>
      <View style={styles.simscontainer}>
        <C5 />
        <C6 />
        <C7 />
        <C8 />
      </View>
      <Text style={styles.physic}>Your Physical Activity today</Text>
      <View style={styles.pcontainer}>
        <View style={styles.pimagecontainer}>
          <Image style={styles.image} source={require('../../assets/icon/p1.png')} />
          <Image style={styles.image} source={require('../../assets/icon/p2.png')} />
          <Image style={styles.image} source={require('../../assets/icon/p.png')} />
          <Image style={styles.image} source={require('../../assets/icon/p8.png')} />
        </View>
      </View>
      <View style={styles.ppcontainer}>
        <View style={styles.ppimagecontainer}>
          <Image style={styles.image1} source={require('../../assets/icon/p4.png')} />
          <Image style={styles.image1} source={require('../../assets/icon/p3.png')} />
          <Image style={styles.image1} source={require('../../assets/icon/p5.png')} />
          <Image style={styles.image1} source={require('../../assets/icon/p6.png')} />
        </View>
      </View>
      <View style={[styles.buttonContainer, { marginTop: 70 }]}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Female')}>
          <CalButton />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Simp')}>
          <SimpButton />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Artt')}>
          <ArtButton />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Simp;

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
  mood: {
    fontSize: 25,
    fontFamily: 'Poppins-MediumItalic',
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 25,
  },
  physic: {
    fontSize: 25,
    fontFamily: 'Poppins-MediumItalic',
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 70,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  simcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
    marginTop: 20,
  },
  simscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
    marginTop: 30,
  },
  pcontainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: -200,
  },
  pimagecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 220, 
  },
  image: {
    width: 90, 
    height: 120, 
  },
  ppcontainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: -200,
  },
  ppimagecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 220, 
  },
  image1: {
    width: 80, 
    height: 95, 
  },
});
