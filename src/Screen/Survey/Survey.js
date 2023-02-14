import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import styles from './Styles';
import CustomTextInput from './Components/CustomTextInput';

const Survey = ({navigation}) => {
  const [users, setUsers] = useState(0);
  const [vDissappointed, setvDissappointed] = useState(0);
  const [disappointed, setDisappointed] = useState(0);
  const [ndisappointed, setNdisappointed] = useState(0);



  const save = () => {
    const v = (vDissappointed * 100) / users;
    const d = (disappointed * 100) / users;
    const n = (ndisappointed * 100) / users;
    if (users && ndisappointed && disappointed && vDissappointed) {
      if (v + d + n <= 100) {
        const data = {
          veryDiss: v,
          diss: d,
          NoDiss: n,
        };
        navigation.navigate('Dashboard', data);
      } else {
        alert('Please enter valid Data');
      }
    } else {
      alert('Enter all details');
    }
  };

  const reset = () => {
    setDisappointed('');
    setNdisappointed('');
    setvDissappointed('');
    setUsers('');
  };

  const Button = ({title, onPress}) => {
    return (
      <TouchableOpacity style={styles.submitBtn} onPress={onPress}>
        <Text style={styles.btnTxt}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAwareScrollView
        style={styles.safeArea}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Fill the survey Form</Text>
          </View>
          <View style={styles.questionSection}>
            <CustomTextInput
              state={users}
              setState={setUsers}
              title={'How many users answered the survey?'}
            />
            <CustomTextInput
              state={vDissappointed}
              setState={setvDissappointed}
              title={
                'How many users answered "Very disappointed" in the survey?'
              }
            />
            <CustomTextInput
              state={disappointed}
              setState={setDisappointed}
              title={
                'How many users answered "Very little disappointed" in the survey?'
              }
            />
            <CustomTextInput
              state={ndisappointed}
              setState={setNdisappointed}
              title={
                'How many users answered "Not disappointed" in the survey?'
              }
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button title={'Save'} onPress={() => save()} />
            <Button title={'Reset'} onPress={() => reset()} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Survey;
