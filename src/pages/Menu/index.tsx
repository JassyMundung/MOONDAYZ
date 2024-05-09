import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Button, Gap } from '../../components';

const Menu = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Moondayz</Text>
      <View style={styles.contentWrapper}>
        <Gap height={24} />
        <Button
          label="Female"
          onSubmit={() => navigation.navigate('Female')}
        />
        <Gap height={12} />
        <Button
          label="Male"
          onSubmit={() => navigation.navigate('Male')}
        />
      </View>
    </ScrollView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#BA55D3',
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  contentWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
});
