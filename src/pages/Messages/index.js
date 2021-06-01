import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor4, DummyDoctor5, DummyDoctor6} from '../../assets';
import ListDoctor from '../../components/molecules/ListDoctor';
import {colors, fonts} from '../../utils';

const Messages = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      profile: DummyDoctor4,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, terimakasih banyak atas wak...',
    },
    {
      id: 2,
      profile: DummyDoctor5,
      name: 'Putri Hayza',
      desc: 'Baik ibu, terimakasih banyak atas wak...',
    },
    {
      id: 3,
      profile: DummyDoctor6,
      name: 'John McParker Steve',
      desc: 'Baik ibu, terimakasih banyak atas wak...',
    },
  ]);
  return (
    <View style={styles.page}>
      <Text>Messages</Text>
      {doctors.map(doctor => {
        return (
          <ListDoctor
            key={doctor.id}
            profile={doctor.profile}
            name={doctor.name}
            desc={doctor.desc}
          />
        );
      })}
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
