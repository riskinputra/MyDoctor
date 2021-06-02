import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {DummyDoctor11} from '../../assets';
import ListDoctor from '../../components/molecules/ListDoctor';
import {colors} from '../../utils';

const ChooseDoctor = () => {
  return (
    <View style={styles.page}>
      <Header type="dark" title="Pilih Dokter Anak" />
      <ListDoctor
        type="next"
        profile={DummyDoctor11}
        name="Alexander Jannie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor11}
        name="Alexander Jannie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor11}
        name="Alexander Jannie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor11}
        name="Alexander Jannie"
        desc="Wanita"
      />
      <ListDoctor
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
  page: {backgroundColor: colors.white, flex: 1},
});
