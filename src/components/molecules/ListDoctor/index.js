import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const ListDoctor = ({profile, name, desc}) => {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {flex: 1, marginLeft: 16},
  avatar: {width: 46, height: 46, borderRadius: 46 / 2},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
