import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyDoctor11} from '../../assets';
import {Header, List} from '../../components/molecules';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <List
        type="next"
        profile={DummyDoctor11}
        name="Alexander Jannie"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="next"
        profile={DummyDoctor11}
        name="Alexander Jannie"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor11}
        name="Alexander Jannie"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor11}
        name="Alexander Jannie"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor11}
        name="Alexander Jannie"
        desc="Wanita"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.red, flex: 1},
});
