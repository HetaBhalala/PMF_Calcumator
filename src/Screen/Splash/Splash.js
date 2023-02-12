import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../../Theme/color'

const Splash = ({navigation}) => {
    useEffect(() => {
     setTimeout(()=>{
        navigation.navigate('Survey')
     },3000)
    }, [])
    
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>PMF Calculator</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.PRIMARY,
        alignItems:'center',
        justifyContent:'center'
    },
    txt:{
        color:colors.WHITE,
        fontSize:32,
        fontWeight:"900"
    }
})