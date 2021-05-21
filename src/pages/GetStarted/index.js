import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button} from '../../components';

const GetStarted = () => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <View style={styles.separationButton} />
        <Button type="secondary" title="Sign In" />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginTop: 91,
  },
  separationButton: {
    height: 16,
  },
});
