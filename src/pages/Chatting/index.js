import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {ChatItem} from '../../components/molecules';
import {colors, fonts} from '../../utils';

const Chatting = () => {
  return (
    <View>
      <Header type="dark-profile" title="Nairobu Putri Hayza" />
      <Text>Senin, 21 Maret, 2020</Text>
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {flex: 1},
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
