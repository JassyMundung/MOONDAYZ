import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, { useEffect } from 'react';
import A2 from '../../assets/icon/art2.svg';
import A3 from '../../assets/icon/art3.svg';
import A8 from '../../assets/icon/art8.svg';
import A9 from '../../assets/icon/art9.svg';
import A10 from '../../assets/icon/art10.svg';
import A11 from '../../assets/icon/art11.svg';
import Back from '../../assets/icon/Back.svg';

const Male = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
      <Text style={styles.text}>MALE</Text>
        </TouchableOpacity>
      <View style={styles.Artcontainer}>
        <A2 />
        <A3 />
      </View>
      <View style={styles.Arttcontainer}>
        <A8 />
        <A9 />
      </View>
      <View style={styles.Artttcontainer}>
        <A10 />
        <A11 />
      </View>
    </View>
  );
};

export default Male;

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
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
    color: '#FFFF',
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
  topcontainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 100,
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});