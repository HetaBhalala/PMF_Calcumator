import { StyleSheet } from "react-native";
import colors from "../../Theme/color";
import { PX } from "../../Theme/PX";

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    gaugeText: {
      backgroundColor: 'transparent',
      color: '#000',
      fontSize: 24,
    },
    chart: {
      marginVertical: PX(10),
    },
    dot: color => {
      return {
        height: PX(10),
        width: PX(10),
        backgroundColor: color,
        borderRadius: PX(150),
        marginHorizontal: PX(10),
      };
    },
    txtStyle:{
      color:colors.BLACK,
      fontSize:16
    },
    resultTxt:{
      color:colors.BLACK,
      fontSize:28,
      fontWeight:'bold'
    }
  });