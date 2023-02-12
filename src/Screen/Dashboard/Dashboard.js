import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Pie from 'react-native-pie';
import colors from '../../Theme/color';
import styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = ({route}) => {
  const [vDissappointed, setvDissappointed] = useState('');
  const [disappointed, setDisappointed] = useState('');
  const [ndisappointed, setNdisappointed] = useState('');
  useEffect(() => {
    getData()
    console.log('Key', route.params, route.params.veryDiss);
    setDisappointed(route.params.diss),
      setNdisappointed(route.params.NoDiss),
      setvDissappointed(route.params.veryDiss);
  }, []);

  const getData =async()=>{
    const temp = await AsyncStorage.getItem('data')
    console.log(JSON.parse(temp));
  }

  const Status = ({text, color,state}) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.dot(color)}></View>
        <View>
          <Text style={styles.txtStyle}>{text} {' '}{state}%</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.resultTxt}>Result</Text>
        </View>
      <View style={styles.chart}>
        <Pie
          radius={80}
          innerRadius={50}
          sections={[
            {
              percentage: Number(vDissappointed),
              //   color: 'red',
              color: colors.PRIMARY,
            },
            {
              percentage: Number(disappointed),
              //   color: 'green',
              color: colors.SECONDARY,
            },
            {
              percentage: Number(ndisappointed),
              //   color: 'blue',
              color: colors.BLUE,
            },
          ]}
          strokeCap={'butt'}></Pie>
        {/* <View style={styles.gauge}>
          <Text style={styles.gaugeText}>60%</Text>
        </View> */}
      </View>
      <View>
        <Status color={colors.PRIMARY} text={'Very dissappointment'} state={vDissappointed}/>
        <Status color={colors.SECONDARY} text={'Mildly dissappointment'} state={disappointed}/>
        <Status color={colors.BLUE} text={'No dissappointment'} state={ndisappointed}/>
      </View>
    </View>
  );
};

export default Dashboard;


